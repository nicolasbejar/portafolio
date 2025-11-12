# GitHub Pages Deployment Guide

This guide will help you deploy your Stanford portfolio website to GitHub Pages for free hosting.

## 📋 Prerequisites

- GitHub account
- Git installed on your computer
- Your completed website files

## 🚀 Quick Deployment Steps

### Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Repository details:
   - **Repository name**: `stanford-portfolio` (or any name you prefer)
   - **Description**: "Professional portfolio website for Stanford Masters Application"
   - **Visibility**: Public (required for free GitHub Pages)
   - **Initialize**: Don't check "Add a README file" (we already have one)

### Step 2: Upload Your Website Files

#### Option A: Using GitHub Web Interface (Easiest)
1. In your new repository, click "uploading an existing file"
2. Drag and drop all your website files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
   - `package.json`
   - `.gitignore`
3. Add commit message: "Initial commit: Stanford portfolio website"
4. Click "Commit changes"

#### Option B: Using Git Command Line
1. Open terminal/command prompt
2. Navigate to your website folder:
   ```bash
   cd "c:\Users\nicolsbejar\OneDrive - Microsoft\Desktop\Website"
   ```
3. Initialize Git repository:
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Stanford portfolio website"
   ```
4. Connect to GitHub:
   ```bash
   git remote add origin https://github.com/YOUR_USERNAME/stanford-portfolio.git
   git branch -M main
   git push -u origin main
   ```

### Step 3: Enable GitHub Pages

1. In your GitHub repository, go to **Settings** (top menu)
2. Scroll down to **"Pages"** in the left sidebar
3. Under **"Source"**:
   - Select "Deploy from a branch"
   - Branch: `main`
   - Folder: `/ (root)`
4. Click **"Save"**

### Step 4: Access Your Live Website

1. GitHub will show you the URL where your site is published
2. It will be: `https://YOUR_USERNAME.github.io/stanford-portfolio`
3. **Note**: It may take 5-10 minutes for the site to be live

## 🌐 Custom Domain (Optional)

If you want a custom domain like `nicolasbejar.com`:

1. Buy a domain from a registrar (GoDaddy, Namecheap, etc.)
2. In your GitHub repository settings:
   - Go to **Pages** section
   - Add your custom domain
   - Enable "Enforce HTTPS"
3. Configure DNS records with your domain provider:
   ```
   Type: CNAME
   Name: www
   Value: YOUR_USERNAME.github.io
   ```

## 🔄 Updating Your Website

Whenever you want to update your website:

1. Make changes to your files locally
2. Upload/commit the changes to GitHub
3. Your website will automatically update within minutes

### Using Git:
```bash
git add .
git commit -m "Update: description of changes"
git push origin main
```

## ✅ Verification Checklist

After deployment, verify everything works:

- [ ] Website loads correctly
- [ ] All sections are visible
- [ ] Navigation menu works
- [ ] Links open correctly
- [ ] Mobile responsiveness works
- [ ] Contact information is accessible
- [ ] Social media links work

## 🎯 Stanford Application Integration

For your Stanford application:

1. **Use the live URL** in your application
2. **URL format**: `https://YOUR_USERNAME.github.io/stanford-portfolio`
3. **Test the URL** on different devices before submitting
4. **Consider creating a short URL** using bit.ly or similar for easier sharing

## 🔧 Troubleshooting

### Common Issues:

**Site not loading after 10 minutes:**
- Check that `index.html` is in the root directory
- Verify GitHub Pages is enabled in repository settings
- Check for any error messages in the Pages settings

**404 Error:**
- Ensure the repository is public
- Verify the file is named `index.html` (case-sensitive)
- Check the GitHub Pages source settings

**Styling not loading:**
- Verify `styles.css` is in the same directory as `index.html`
- Check that the file path in HTML is correct: `href="styles.css"`

**JavaScript not working:**
- Verify `script.js` is in the same directory
- Check browser console for any error messages

## 📱 Testing Your Live Site

Use these tools to test your deployed website:

1. **Mobile Testing**: 
   - Chrome DevTools (F12 → Device toolbar)
   - Real mobile devices

2. **Performance Testing**:
   - Google PageSpeed Insights
   - GTmetrix

3. **Browser Testing**:
   - Chrome, Firefox, Safari, Edge

## 📞 Support

If you encounter issues:

1. Check GitHub Pages [documentation](https://pages.github.com/)
2. Review GitHub Pages [troubleshooting guide](https://docs.github.com/en/pages/getting-started-with-github-pages/troubleshooting-jekyll-build-errors-for-github-pages-sites)
3. Contact GitHub Support if needed

---

**Success!** 🎉 Your Stanford portfolio is now live and accessible to admissions committees worldwide!

**Final URL**: `https://YOUR_USERNAME.github.io/stanford-portfolio`

Remember to include this URL in your Stanford application and test it thoroughly before submitting.