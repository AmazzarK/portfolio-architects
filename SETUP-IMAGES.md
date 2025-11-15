# Instructions for Adding Profile Images

## Profile Images Setup

You provided two professional black & white portrait images. To use them in your portfolio:

### Option 1: Replace the existing profile image
1. Save your preferred image as `profile.png` in the `src/assets/` folder
2. The image will automatically appear in the Hero section

### Option 2: Use both images
1. Save the first image as `profile.png` in `src/assets/`
2. Save the second image as `profile-alt.png` in `src/assets/`
3. You can use the second image in the About section or Contact section

### Image Specifications
- **Format**: PNG or JPG
- **Dimensions**: Recommended 800x800px or higher (square format works best)
- **Style**: Already black & white ✓
- **File size**: Optimize to under 500KB for best performance

### Current Usage
The profile image is currently used in:
- Hero section (circular format with border)
- Can be added to About section
- Can be added as background element

### Tips for Best Results
1. Use high-resolution images (at least 800x800px)
2. Ensure good lighting and contrast
3. Center the face in the frame
4. The portfolio will automatically apply styling (borders, shadows, animations)

---

## CV PDF Files

You need to add your CV in three languages to the `public/` folder:

1. **English CV**: `public/cv-en.pdf`
2. **French CV**: `public/cv-fr.pdf`  
3. **German CV**: `public/cv-de.pdf`

The download button will automatically serve the correct PDF based on the selected language.

### How to Generate PDFs from LaTeX

If you have LaTeX source:
```bash
pdflatex your-cv-en.tex
pdflatex your-cv-fr.tex
pdflatex your-cv-de.tex
```

Then copy the generated PDFs to the public folder with the correct names.
