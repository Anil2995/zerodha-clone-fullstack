# 🤝 Contributing to Zerodha Clone

First off, thank you for considering contributing to this project! 🎉

## 📋 Table of Contents

- [Code of Conduct](#code-of-conduct)
- [Getting Started](#getting-started)
- [How to Contribute](#how-to-contribute)
- [Development Setup](#development-setup)
- [Pull Request Process](#pull-request-process)
- [Style Guidelines](#style-guidelines)
- [Reporting Bugs](#reporting-bugs)
- [Suggesting Features](#suggesting-features)

---

## 📜 Code of Conduct

By participating in this project, you agree to:

- ✅ Be respectful and inclusive
- ✅ Accept constructive criticism gracefully
- ✅ Focus on what's best for the community
- ✅ Show empathy towards other contributors

---

## 🚀 Getting Started

### Prerequisites

| Tool | Version | Purpose |
|------|---------|---------|
| Node.js | 18+ | JavaScript runtime |
| npm | 9+ | Package manager |
| Git | Latest | Version control |
| MongoDB | Atlas | Database |

### Fork & Clone

1. **Fork** this repository by clicking the Fork button
2. **Clone** your fork:
   ```bash
   git clone https://github.com/YOUR_USERNAME/zerodha-clone.git
   cd zerodha-clone
   ```
3. **Add upstream** remote:
   ```bash
   git remote add upstream https://github.com/ORIGINAL_OWNER/zerodha-clone.git
   ```

---

## 💻 How to Contribute

### Types of Contributions

| Type | Description | Label |
|------|-------------|-------|
| 🐛 **Bug Fix** | Fix a bug in the code | `bug` |
| ✨ **Feature** | Add a new feature | `enhancement` |
| 📝 **Documentation** | Improve docs | `documentation` |
| 🎨 **UI/UX** | Improve design | `design` |
| ⚡ **Performance** | Optimize code | `performance` |
| 🧪 **Testing** | Add or improve tests | `testing` |

### Contribution Workflow

```
1. Fork the repository
      ↓
2. Create a feature branch
      ↓
3. Make your changes
      ↓
4. Test your changes
      ↓
5. Commit with clear message
      ↓
6. Push to your fork
      ↓
7. Open a Pull Request
```

---

## 🔧 Development Setup

### 1. Install Dependencies

```bash
# Backend
cd Backend && npm install

# Frontend
cd ../frontend && npm install

# Dashboard
cd ../dashboard && npm install
```

### 2. Configure Environment

```bash
# Backend
cd Backend
cp .env.example .env
# Edit .env with your MongoDB URL

# Frontend & Dashboard
echo "REACT_APP_API_URL=http://localhost:3002" > frontend/.env
echo "REACT_APP_API_URL=http://localhost:3002" > dashboard/.env
```

### 3. Start Development Servers

```bash
# Terminal 1 - Backend
cd Backend && npm start

# Terminal 2 - Frontend
cd frontend && npm start

# Terminal 3 - Dashboard
cd dashboard && npm start
```

---

## 📝 Pull Request Process

### Before Submitting

- [ ] Code compiles without errors
- [ ] All existing tests pass
- [ ] New features have tests (if applicable)
- [ ] Code follows style guidelines
- [ ] Documentation is updated
- [ ] Commit messages are clear

### PR Template

```markdown
## Description
Brief description of changes

## Type of Change
- [ ] Bug fix
- [ ] New feature
- [ ] Documentation update
- [ ] Performance improvement

## Screenshots (if applicable)
Add screenshots here

## Checklist
- [ ] I have tested my changes
- [ ] I have updated the documentation
- [ ] My code follows the style guidelines
```

### Review Process

| Step | Action |
|------|--------|
| 1 | PR is submitted |
| 2 | Automated checks run |
| 3 | Maintainer reviews code |
| 4 | Feedback provided (if needed) |
| 5 | Changes approved |
| 6 | PR is merged |

---

## 🎨 Style Guidelines

### JavaScript/React

```javascript
// ✅ Good
const getUserData = async (userId) => {
  try {
    const response = await axios.get(`/api/users/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
};

// ❌ Bad
const getuser = async (id) => {
  const r = await axios.get('/api/users/' + id);
  return r.data;
};
```

### CSS

```css
/* ✅ Good - Use CSS variables */
.button {
  background: var(--primary-color);
  padding: var(--spacing-md);
  border-radius: var(--radius-sm);
}

/* ❌ Bad - Hardcoded values */
.button {
  background: #387ED1;
  padding: 16px;
  border-radius: 8px;
}
```

### Naming Conventions

| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `UserProfile.js` |
| CSS Files | Same as component | `UserProfile.css` |
| Functions | camelCase | `getUserData()` |
| Constants | UPPER_SNAKE | `API_BASE_URL` |
| CSS Classes | kebab-case | `.user-profile` |

### File Structure

```
component/
├── ComponentName.js      # Main component
├── ComponentName.css     # Styles
├── ComponentName.test.js # Tests (optional)
└── index.js              # Export (optional)
```

---

## 🐛 Reporting Bugs

### Before Reporting

1. Check existing issues
2. Verify it's reproducible
3. Collect error messages

### Bug Report Template

```markdown
## Bug Description
Clear description of the bug

## Steps to Reproduce
1. Go to '...'
2. Click on '...'
3. See error

## Expected Behavior
What should happen

## Actual Behavior
What actually happens

## Screenshots
If applicable

## Environment
- OS: [e.g., Windows 11]
- Browser: [e.g., Chrome 120]
- Node.js: [e.g., 18.17.0]
```

---

## 💡 Suggesting Features

### Feature Request Template

```markdown
## Feature Description
Clear description of the feature

## Problem it Solves
What problem does this solve?

## Proposed Solution
How should it work?

## Alternatives Considered
Other solutions you've thought of

## Additional Context
Any other information
```

---

## 📁 Project Structure

When contributing, follow this structure:

```
ZERODHA_CLONE/
├── Backend/           # Express.js API
│   ├── config/        # Configuration files
│   ├── model/         # Database models
│   ├── routes/        # API routes
│   └── schemas/       # Mongoose schemas
│
├── frontend/          # Landing website
│   └── src/
│       └── landing_page/
│           ├── home/
│           ├── about/
│           └── ...
│
└── dashboard/         # Trading dashboard
    └── src/
        └── components/
```

---

## 🏆 Contributors

Thank you to everyone who has contributed!

<!-- Add contributor avatars here -->

---

## ❓ Questions?

If you have questions:

1. Check the [README](README.md)
2. Search existing [Issues](../../issues)
3. Open a new issue with the `question` label

---

<div align="center">
  
  Happy Contributing! 🎉
  
</div>
