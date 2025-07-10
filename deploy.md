# Deployment Guide for simone-licciardi.github.io

## Step 1: Create GitHub Repository

1. Go to [GitHub](https://github.com) and sign in
2. Click the "+" icon in the top right and select "New repository"
3. Name the repository exactly: `simone-licciardi.github.io`
4. Make it public
5. Don't initialize with README (we already have one)
6. Click "Create repository"

## Step 2: Upload Your Website

### Option A: Using GitHub Desktop (Recommended)
1. Download and install [GitHub Desktop](https://desktop.github.com/)
2. Clone the repository you just created
3. Copy all files from this folder to the cloned repository folder
4. Commit and push the changes

### Option B: Using Git Command Line
```bash
# Initialize git repository
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial website setup"

# Add remote repository (replace YOUR_USERNAME with your GitHub username)
git remote add origin https://github.com/simone-licciardi/simone-licciardi.github.io.git

# Push to GitHub
git push -u origin main
```

### Option C: Using GitHub Web Interface
1. Go to your repository on GitHub
2. Click "Add file" → "Upload files"
3. Drag and drop all files from this folder
4. Add commit message: "Initial website setup"
5. Click "Commit changes"

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click "Settings" tab
3. Scroll down to "Pages" section
4. Under "Source", select "Deploy from a branch"
5. Select "main" branch
6. Click "Save"
7. Wait a few minutes for the site to be published

## Step 4: Customize Your Site

### Add Your Profile Picture
1. Add your professional photo to `assets/profile-pics/profile.jpg`
2. Make sure it's a square image (recommended: 400x400 pixels)

### Update Personal Information
Edit `_data/main_info.yaml` to update:
- Email address
- Social media links
- Profile picture path

### Update Content
Edit `index.html` to modify:
- Bio section
- Education details
- Experience descriptions
- Project descriptions
- Skills and interests

## Step 5: Verify Your Site

Your site will be available at: `https://simone-licciardi.github.io`

## Troubleshooting

- If the site doesn't appear, wait 5-10 minutes for GitHub Pages to build
- Check the "Actions" tab in your repository for build status
- Make sure all files are properly uploaded
- Verify the repository name is exactly `simone-licciardi.github.io`

## Next Steps

1. Add your actual profile picture
2. Update the thesis document link in the projects section
3. Add any additional projects or publications
4. Consider adding a custom domain (optional)
5. Set up Google Analytics if desired

## Files to Update

- `assets/profile-pics/profile.jpg` - Your profile picture
- `assets/adaptive_lr_minmax.pdf` - Your thesis proposal
- `_data/main_info.yaml` - Personal information
- `index.html` - Main content
- `libs/custom/my_css.css` - Custom styling (optional) 