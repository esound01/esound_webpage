# Deployment Guide - eSound Imaging Website

## Cloudflare Pages Deployment

### Prerequisites
- GitHub account with repository: `esound01/esound_webpage`
- Cloudflare account
- Domain: `esoundimaging.com` (configured in Cloudflare)

### Step-by-Step Deployment

#### 1. Connect GitHub to Cloudflare Pages

1. Log in to your Cloudflare account
2. Go to **Pages** in the left sidebar
3. Click **Connect to Git**
4. Authorize Cloudflare to access your GitHub account
5. Select the repository: `esound01/esound_webpage`
6. Click **Connect account**

#### 2. Configure Build Settings

1. In the **Create a project** page:
   - **Project name**: `esound-imaging`
   - **Production branch**: `main`
   - **Build command**: Leave empty (static site)
   - **Build output directory**: `/` (root directory)

2. Click **Save and Deploy**

#### 3. Configure Custom Domain

1. After deployment completes, go to your project settings
2. Click on **Custom domains**
3. Click **Add custom domain**
4. Enter: `esoundimaging.com`
5. Follow the DNS setup instructions

#### 4. DNS Configuration in Cloudflare

If you're using Cloudflare's nameservers:

1. Go to **DNS** in Cloudflare dashboard
2. Add a CNAME record:
   - **Name**: `esound-imaging`
   - **Target**: `esound-imaging.pages.dev`
   - **Proxy status**: Proxied

Or add an A record pointing to Cloudflare Pages IP addresses.

#### 5. SSL/TLS Configuration

1. Go to **SSL/TLS** in Cloudflare dashboard
2. Set encryption mode to **Full** or **Full (strict)**
3. Enable **Always Use HTTPS**

### Automatic Deployments

Once configured, every push to the `main` branch will automatically:
1. Trigger a new build
2. Deploy to `esoundimaging.com`
3. Update your live website

### Manual Deployment (Alternative)

If not using Cloudflare Pages:

1. Build the project (no build step needed for static HTML)
2. Upload files to your hosting provider
3. Configure DNS to point to your hosting

### Testing

After deployment:

1. Visit `https://esoundimaging.com`
2. Test language switcher (EN/ES)
3. Test responsive design on mobile
4. Test contact form
5. Verify all links work correctly

### Troubleshooting

**Site not loading:**
- Check DNS propagation (can take up to 48 hours)
- Verify domain is correctly configured in Cloudflare
- Check build logs in Cloudflare Pages dashboard

**Images not showing:**
- Verify image URLs are correct
- Check that CDN URLs are accessible
- Clear browser cache

**Form not working:**
- Contact form uses mailto: links
- Ensure email client is configured on the device
- Alternative: Implement backend email service

### Environment Variables

If needed in future, add environment variables in Cloudflare Pages:

1. Go to **Settings** → **Environment variables**
2. Add variables as needed
3. Redeploy

### Performance Optimization

Cloudflare automatically provides:
- Global CDN caching
- Automatic compression
- DDoS protection
- SSL/TLS encryption

### Monitoring

Monitor your site using:
- Cloudflare Analytics dashboard
- Page Rules for caching optimization
- Worker scripts for advanced functionality

## Support

For issues or questions:
- Email: info@esoundimaging.com
- Contact: Elys Linfernal
