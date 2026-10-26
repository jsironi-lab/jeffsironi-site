# Deployment Guide

## Overview

This guide covers different ways to deploy your personal website to your domain.

## Option 1: Netlify (Recommended for Beginners)

**Pros:** Free, easy drag-and-drop, automatic HTTPS, custom domain support

### Steps:
1. Go to [netlify.com](https://netlify.com) and create a free account
2. Click "Add new site" → "Deploy manually"
3. Drag your `jeffsironi-site` folder into the upload area
4. Once deployed, click "Domain settings" → "Add custom domain"
5. Enter your domain name and follow DNS instructions
6. Netlify will automatically set up HTTPS for you

### Future Updates:
- Simply drag and drop your updated folder to redeploy
- Or connect to a Git repository for automatic deployments

## Option 2: Vercel

**Pros:** Similar to Netlify, excellent performance, free tier

### Steps:
1. Go to [vercel.com](https://vercel.com) and sign up
2. Click "Add New" → "Project"
3. Import from Git or drag & drop your folder
4. Add your custom domain in project settings
5. Update DNS records as instructed

## Option 3: GitHub Pages

**Pros:** Free, integrated with Git version control, great for learning Git

### Steps:
1. Create a GitHub account if you don't have one
2. Create a new repository called `jeffsironi-site`
3. Upload your files to the repository
4. Go to Settings → Pages
5. Select the branch to deploy from
6. Add custom domain in the settings
7. Update your DNS records

## Option 4: Traditional Web Hosting

**Pros:** Full control, works with existing hosting

### Steps:
1. Get the FTP credentials from your domain hosting provider
2. Use an FTP client like FileZilla or Cyberduck
3. Connect to your server
4. Upload all files from `jeffsironi-site` to your web root (usually `public_html` or `www`)
5. Your site should be live at your domain immediately

## DNS Configuration

Regardless of which option you choose, you'll need to update your DNS records:

### For Netlify/Vercel:
- They'll provide specific DNS records (usually A record or CNAME)
- Go to your domain registrar's DNS settings
- Add the records they provide
- Wait 24-48 hours for DNS propagation

### For Traditional Hosting:
- Usually just point your domain's A record to the server IP
- Your hosting provider will give you specific instructions

## Before You Deploy

- [ ] Update all placeholder text (email, social media links)
- [ ] Test the site locally in multiple browsers
- [ ] Optimize any images you add later
- [ ] Replace placeholder links with your actual profiles
- [ ] Consider adding a favicon

## After Deployment

- Test on mobile devices
- Check all links work
- Verify forms/contact methods work
- Set up Google Analytics (optional)
- Submit to Google Search Console (optional)

## Updating Your Site

### With Netlify/Vercel:
- Make changes locally
- Drag and drop the updated folder
- Changes go live immediately

### With GitHub Pages:
- Commit and push changes to your repository
- GitHub automatically redeploys

### With FTP:
- Upload changed files via FTP
- Overwrites old files automatically

## Backup Strategy

- Keep local copies of all files
- If using Git, your entire history is backed up
- Consider keeping version snapshots before major changes
- Download a copy from your live site periodically

## Domain Providers - Quick Reference

If you already own your domain, you'll configure DNS through your registrar:
- GoDaddy: DNS Management in domain settings
- Namecheap: Advanced DNS tab
- Google Domains: DNS settings
- Hover: DNS settings

## Need Help?

Most deployment platforms have excellent documentation:
- [Netlify Docs](https://docs.netlify.com)
- [Vercel Docs](https://vercel.com/docs)
- [GitHub Pages Docs](https://docs.github.com/pages)

## Cost Breakdown

- **Netlify/Vercel Free Tier:** $0/month (perfect for personal sites)
- **GitHub Pages:** $0/month
- **Traditional Hosting:** $5-15/month typically
- **Domain Name:** $10-15/year (if you don't have one)

---

**Recommendation:** Start with Netlify. It's the easiest, free, and you can always migrate later if needed.
