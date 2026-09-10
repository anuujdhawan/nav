'use client';

import { useState, useEffect, useRef } from 'react';
import { MessageCircle, X, Send, User, Mail, Phone, MessageSquare, Bot, CheckCircle } from 'lucide-react';
import { brandPhoneDisplay } from '@/lib/contactInfo';

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

interface UserInfo {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
}

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [currentStep, setCurrentStep] = useState<'greeting' | 'name' | 'email' | 'phone' | 'service' | 'message' | 'completed'>('greeting');
  const [userInfo, setUserInfo] = useState<UserInfo>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });
  const [isTyping, setIsTyping] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const greetingTimeoutRef = useRef<number | null>(null);
  const replyTimeoutRef = useRef<number | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const addBotMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'bot',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const addUserMessage = (text: string) => {
    const message: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date()
    };
    setMessages(prev => [...prev, message]);
  };

  const services = [
    'Skilled Immigration',
    'Work Permits', 
    'Study & Visit Visas',
    'Business Immigration',
    'Other'
  ];

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      greetingTimeoutRef.current = window.setTimeout(() => {
        addBotMessage("Hello! Welcome to Navigator Immigration Consultant. I'm here to help you with your immigration journey. What's your name?");
      }, 500);
    }

    return () => {
      if (greetingTimeoutRef.current !== null) {
        window.clearTimeout(greetingTimeoutRef.current);
      }
    };
  }, [isOpen, messages.length]);

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    return () => {
      if (greetingTimeoutRef.current !== null) {
        window.clearTimeout(greetingTimeoutRef.current);
      }
      if (replyTimeoutRef.current !== null) {
        window.clearTimeout(replyTimeoutRef.current);
      }
    };
  }, []);

  const handleUserInput = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    addUserMessage(userMessage);
    setInputValue('');
    setIsTyping(true);

    replyTimeoutRef.current = window.setTimeout(() => {
      processUserInput(userMessage);
      setIsTyping(false);
    }, 1000);
  };

  const processUserInput = (input: string) => {
    switch (currentStep) {
      case 'greeting':
        const name = input.trim();
        setUserInfo(prev => ({ ...prev, name }));
        setCurrentStep('email');
        addBotMessage(`Nice to meet you, ${name}! What's your email address?`);
        break;

      case 'email':
        const email = input.trim();
        if (validateEmail(email)) {
          setUserInfo(prev => ({ ...prev, email }));
          setCurrentStep('phone');
          addBotMessage("Great! What's your phone number?");
        } else {
          addBotMessage("Please enter a valid email address. Example: name@email.com");
        }
        break;

      case 'phone':
        const phone = input.trim();
        if (validatePhone(phone)) {
          setUserInfo(prev => ({ ...prev, phone }));
          setCurrentStep('service');
          addBotMessage("Perfect! Which immigration service are you interested in?");
          addBotMessage("Please choose from: Skilled Immigration, Work Permits, Study & Visit Visas, Business Immigration, or Other");
        } else {
          addBotMessage(`Please enter a valid phone number. Example: ${brandPhoneDisplay}`);
        }
        break;

      case 'service':
        const service = input.trim();
        if (services.some(s => s.toLowerCase() === service.toLowerCase())) {
          setUserInfo(prev => ({ ...prev, service }));
          setCurrentStep('message');
          addBotMessage("Excellent! How can we help you with your immigration needs? Please describe your situation or questions.");
        } else {
          addBotMessage("Please choose one of the available services: Skilled Immigration, Work Permits, Study & Visit Visas, Business Immigration, or Other");
        }
        break;

      case 'message':
        const message = input.trim();
        const nextUserInfo = { ...userInfo, message };
        setUserInfo(nextUserInfo);
        setCurrentStep('completed');
        addBotMessage("Thank you for providing all the information! I'm sending your details to our immigration experts now.");
        
        // Send email
        void sendEmail(nextUserInfo);
        break;
    }
  };

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhone = (phone: string) => {
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    return phoneRegex.test(phone) && phone.replace(/\D/g, '').length >= 10;
  };

  const sendEmail = async (info: UserInfo) => {
    try {
      const controller = new AbortController();
      const timeout = window.setTimeout(() => controller.abort(), 30000);

      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        signal: controller.signal,
        body: JSON.stringify({
          to: 'info@navigatorglobals.com',
          replyTo: info.email,
          subject: `New Immigration Inquiry from ${info.name}`,
          html: `
            <h2>New Immigration Inquiry</h2>
            <p><strong>Name:</strong> ${info.name}</p>
            <p><strong>Email:</strong> ${info.email}</p>
            <p><strong>Phone:</strong> ${info.phone}</p>
            <p><strong>Service:</strong> ${info.service}</p>
            <p><strong>Message:</strong> ${info.message}</p>
            <p><strong>Date:</strong> ${new Date().toLocaleString()}</p>
          `
        })
      });

      window.clearTimeout(timeout);

      if (response.ok) {
        setEmailSent(true);
        addBotMessage("✅ Perfect! Your information has been sent to our immigration experts. One of our agents will call you shortly to discuss your immigration options. Thank you for choosing Navigator Immigration Consultant!");
      } else {
        addBotMessage(`I apologize, but I'm having trouble sending your information right now. Please try again or call us directly at ${brandPhoneDisplay}.`);
      }
    } catch (error) {
      if (error instanceof DOMException && error.name === 'AbortError') {
        addBotMessage(`The request timed out. Please try again or call us directly at ${brandPhoneDisplay}.`);
      } else {
        addBotMessage(`I apologize, but I'm having trouble sending your information right now. Please try again or call us directly at ${brandPhoneDisplay}.`);
      }
    }
  };

  const resetChat = () => {
    setMessages([]);
    setCurrentStep('greeting');
    setUserInfo({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
    setEmailSent(false);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleUserInput();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <div className="fixed bottom-6 right-6 z-40">
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? 'Close chat assistant' : 'Open chat assistant'}
          className={`flex items-center justify-center w-12 h-12 sm:w-14 sm:h-14 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transform hover:scale-110 transition-all duration-300 ${
            isOpen ? 'rotate-180' : ''
          }`}
        >
          {isOpen ? <X className="w-5 h-5 sm:w-6 sm:h-6" /> : <MessageCircle className="w-5 h-5 sm:w-6 sm:h-6" />}
        </button>
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-2 sm:right-6 w-[calc(100%-1rem)] sm:w-96 max-h-[80vh] sm:max-h-none h-auto sm:h-[600px] bg-white rounded-2xl shadow-2xl flex flex-col z-40 border border-gray-200">
          {/* Chat Header */}
          <div className="bg-gradient-to-r from-orange-600 to-red-600 text-white p-4 rounded-t-2xl">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                  <Bot className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="font-semibold">Navigator Immigration Consultant Assistant</h3>
                  <p className="text-xs text-blue-100">Immigration Expert</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setIsOpen(false)}
                aria-label="Close chat window"
                className="text-white hover:text-blue-200 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-2xl ${
                    message.sender === 'user'
                      ? 'bg-blue-600 text-white'
                      : 'bg-gray-100 text-gray-800'
                  }`}
                >
                  {message.sender === 'bot' && (
                    <div className="flex items-center space-x-2 mb-1">
                      <Bot className="w-4 h-4 text-blue-600" />
                      <span className="text-xs font-medium text-blue-600">Navigator Immigration Consultant Assistant</span>
                    </div>
                  )}
                  <p className="text-sm">{message.text}</p>
                  <p className="text-xs mt-1 opacity-70">
                    {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </p>
                </div>
              </div>
            ))}

            {isTyping && (
              <div className="flex justify-start">
                <div className="bg-gray-100 text-gray-800 p-3 rounded-2xl">
                  <div className="flex items-center space-x-2">
                    <Bot className="w-4 h-4 text-blue-600" />
                    <div className="flex space-x-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {emailSent && (
              <div className="flex justify-center">
                <div className="bg-orange-50 border border-orange-200 p-4 rounded-xl">
                  <div className="flex items-center space-x-2 text-green-600">
                    <CheckCircle className="w-5 h-5" />
                    <span className="text-sm font-medium">Information sent successfully!</span>
                  </div>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          {currentStep !== 'completed' && (
            <div className="border-t border-gray-200 p-4">
              <div className="flex items-center space-x-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  aria-label={
                    currentStep === 'greeting' ? 'Enter your name' :
                    currentStep === 'email' ? 'Enter your email address' :
                    currentStep === 'phone' ? 'Enter your phone number' :
                    currentStep === 'service' ? 'Enter the service you need' :
                    'Type your message'
                  }
                  placeholder={
                    currentStep === 'greeting' ? "Enter your name..." :
                    currentStep === 'email' ? "Enter your email..." :
                    currentStep === 'phone' ? "Enter your phone number..." :
                    currentStep === 'service' ? "Select a service..." :
                    "Type your message..."
                  }
                  className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  disabled={isTyping}
                />
                <button
                  type="button"
                  onClick={handleUserInput}
                  disabled={isTyping || !inputValue.trim()}
                  aria-label="Send message"
                  className="p-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <Send className="w-5 h-5" />
                </button>
              </div>
              
              {/* Quick Actions */}
              {currentStep === 'service' && (
                <div className="mt-3 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <button
                      type="button"
                      key={service}
                      onClick={() => {
                        addUserMessage(service);
                        setInputValue('');
                        setIsTyping(true);
                        replyTimeoutRef.current = window.setTimeout(() => {
                          processUserInput(service);
                          setIsTyping(false);
                        }, 1000);
                      }}
                      className="px-3 py-1 bg-blue-50 text-blue-600 text-sm rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {service}
                    </button>
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Completed State */}
          {currentStep === 'completed' && (
            <div className="border-t border-gray-200 p-4">
              <div className="text-center space-y-3">
                <p className="text-sm text-gray-600">
                  Thank you for your inquiry! Our team will contact you soon.
                </p>
                <button
                  type="button"
                  onClick={resetChat}
                  className="px-4 py-2 bg-blue-600 text-white text-sm rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Start New Chat
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default ChatBot;
