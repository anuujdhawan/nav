# Admin Panel Setup Guide

## Overview
This guide will help you set up the admin panel for managing SEO metadata across all pages of your Navigator Immigration website.

## Features
- **SEO Metadata Management**: Add, edit, delete SEO metadata for all pages
- **Database Integration**: MySQL with Sequelize ORM
- **Authentication**: Basic HTTP authentication
- **Bulk Operations**: Import/export SEO data
- **Search & Filter**: Find SEO metadata quickly
- **Responsive Design**: Works on all devices

## Database Setup

### 1. Create the SEO Metadata Table
The SEO metadata table will be created automatically when you first run the application. Here's the table structure:

```sql
CREATE TABLE seo_metadata (
  id INT UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  page VARCHAR(255) NOT NULL COMMENT 'Page name for reference',
  route VARCHAR(255) NOT NULL UNIQUE COMMENT 'URL route of the page',
  title VARCHAR(255) NOT NULL COMMENT 'Page title for SEO',
  description TEXT NOT NULL COMMENT 'Meta description',
  keywords TEXT COMMENT 'Meta keywords',
  ogTitle VARCHAR(255) COMMENT 'Open Graph title',
  ogDescription TEXT COMMENT 'Open Graph description',
  ogImage VARCHAR(500) COMMENT 'Open Graph image URL',
  twitterTitle VARCHAR(255) COMMENT 'Twitter card title',
  twitterDescription TEXT COMMENT 'Twitter card description',
  twitterImage VARCHAR(500) COMMENT 'Twitter card image URL',
  canonicalUrl VARCHAR(500) COMMENT 'Canonical URL',
  robots VARCHAR(100) DEFAULT 'index, follow' COMMENT 'Robots meta tag',
  author VARCHAR(255) COMMENT 'Author meta tag',
  publishedTime DATE COMMENT 'Article published time',
  modifiedTime DATE COMMENT 'Article modified time',
  section VARCHAR(255) COMMENT 'Article section',
  tags TEXT COMMENT 'Article tags',
  status ENUM('active', 'inactive') DEFAULT 'active' COMMENT 'Status of the SEO metadata',
  createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updatedAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  
  INDEX idx_route (route),
  INDEX idx_status (status),
  INDEX idx_page (page)
);
```

### 2. Seed Initial Data
Run the seed script to populate initial SEO metadata:

```bash
# From your project root
npx ts-node src/lib/seedSeoData.ts
```

This will create SEO metadata for:
- Home page (/)
- About (/about)
- Contact (/contact)
- Skilled Immigration (/skilled)
- Work Permits (/work-permits)
- Student Visa (/student-visa)
- Visit Visa (/visit-visa)
- Business Immigration (/business-immigration)
- Blog (/blog)
- Payment (/payment)

## Environment Variables

Add these to your `.env` file:

```env
# Database Configuration
DB_NAME=navigator_immigration
DB_USER=root
DB_PASSWORD=your_mysql_password
DB_HOST=localhost

# Admin Authentication
ADMIN_PASSWORD=your_secure_admin_password

# Base URL
NEXT_PUBLIC_BASE_URL=http://localhost:3000
```

## Admin Access

### Authentication
The admin panel is protected by Basic HTTP authentication:

- **Username**: `admin`
- **Password**: Set via `ADMIN_PASSWORD` environment variable

### Accessing the Admin Panel
1. Navigate to `/admin` in your browser
2. When prompted, enter:
   - Username: `admin`
   - Password: Your admin password
3. You'll be redirected to the SEO management dashboard

## Admin Panel Features

### 1. Dashboard Overview
- View all SEO metadata in a table format
- Search by page name, route, or title
- Filter by status (active/inactive)
- Pagination for large datasets
- Quick status toggle and actions

### 2. Add New SEO Metadata
- Click "Add SEO Metadata" button
- Fill in the form with:
  - **Basic Info**: Page name, route, title, description, keywords
  - **Social Media**: OG title/description/image, Twitter card data
  - **Advanced Settings**: Canonical URL, robots meta, author
- Save to create new metadata

### 3. Edit Existing Metadata
- Click the edit icon (pencil) in the actions column
- Modify any fields as needed
- Save changes

### 4. Delete Metadata
- Click the delete icon (trash) in the actions column
- Confirm deletion in the popup

### 5. Bulk Operations
- **Import**: Upload CSV file with SEO data
- **Export**: Download current SEO data as CSV

## API Endpoints

The admin panel uses these API endpoints:

- `GET /api/admin/seo` - List all SEO metadata
- `POST /api/admin/seo` - Create new SEO metadata
- `GET /api/admin/seo/[id]` - Get single SEO metadata
- `PUT /api/admin/seo/[id]` - Update SEO metadata
- `DELETE /api/admin/seo/[id]` - Delete SEO metadata
- `POST /api/admin/seo/bulk` - Bulk operations

## Integration with Pages

### Using Database SEO Metadata
To use the database SEO metadata in your pages:

```typescript
// In any page component
import { getSeoMetadata, generateMetadataFromSeo } from '@/lib/seo';

export async function generateMetadata({ params }) {
  const seoData = await getSeoMetadata('/your-page-route');
  return generateMetadataFromSeo(seoData);
}
```

### Default Fallback
If no SEO metadata is found in the database, the page will use its hardcoded metadata as fallback.

## Security Considerations

### Current Authentication
- Uses Basic HTTP authentication
- Password stored in environment variable
- Suitable for development and simple setups

### Production Recommendations
1. **Use Session-based Authentication**: Implement proper session management
2. **Add CSRF Protection**: Prevent cross-site request forgery
3. **Rate Limiting**: Prevent brute force attacks
4. **Audit Logging**: Log all admin actions
5. **Role-based Access**: Different permission levels
6. **HTTPS Only**: Ensure all admin traffic is encrypted

### Database Security
- Use a dedicated database user with limited privileges
- Enable MySQL query logging
- Regular database backups
- Consider using connection pooling

## Troubleshooting

### Common Issues

1. **401 Unauthorized Error**
   - Check `ADMIN_PASSWORD` environment variable is set
   - Verify username is exactly "admin"
   - Clear browser cache and try again

2. **Database Connection Error**
   - Verify MySQL is running
   - Check database credentials in environment variables
   - Ensure database exists

3. **SEO Metadata Not Showing**
   - Run the seed script to populate initial data
   - Check database table exists
   - Verify data in database

4. **Build Errors**
   - Ensure all environment variables are set
   - Check TypeScript compilation
   - Verify database models are correctly imported

### Debug Mode
To enable debug logging, set:
```env
NODE_ENV=development
```

This will show:
- Database queries
- API request details
- Error stack traces

## Maintenance

### Regular Tasks
1. **Backup Database**: Weekly backups of SEO metadata
2. **Review SEO Data**: Monthly review of metadata accuracy
3. **Update Passwords**: Quarterly admin password changes
4. **Monitor Logs**: Check for unusual admin activity

### Performance Optimization
- Add database indexes for frequently queried fields
- Implement caching for SEO metadata
- Consider CDN for static assets
- Monitor database query performance

## Support

For issues with the admin panel:
1. Check the browser console for JavaScript errors
2. Review the server logs for API errors
3. Verify database connectivity
4. Ensure all environment variables are set correctly

---

**Next Steps**:
1. Set up your database and environment variables
2. Run the seed script to populate initial data
3. Access the admin panel at `/admin`
4. Start managing your SEO metadata!
