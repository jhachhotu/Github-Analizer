# GitHub Analyzer - Enhanced Version 🚀

A powerful React-based GitHub analytics tool that provides deep insights into GitHub users and their repositories with beautiful visualizations and mobile-responsive design.

## ✨ New Features & Improvements

### 1. **Repository Deep Dive** 🔍
- Click on any repository card to view detailed analytics
- Individual repository statistics (stars, forks, watchers, issues)
- Language breakdown with bar charts
- Top contributors list
- Recent commit history with timestamps
- Repository-specific insights

### 2. **Enhanced Analytics Dashboard** 📊
- **Bar Chart for Recent Repositories**: Visual comparison of stars and forks across your most recent repos
- **Improved Repository Cards**: Now clickable with hover effects
- **More Repositories Displayed**: Shows up to 12 repositories (increased from 9)
- **Better Data Visualization**: All charts optimized for readability

### 3. **Mobile Responsive Design** 📱
- Fully optimized for phones, tablets, and desktops
- Responsive grid layouts (2 columns on mobile, 3-4 on desktop)
- Touch-friendly buttons and cards
- Adaptive text sizes and spacing
- Optimized chart displays for small screens
- Hamburger menu for mobile navigation

### 4. **Improved User Experience** 🎨
- Smooth transitions and hover effects
- Better loading states
- Enhanced error handling
- Improved typography and spacing
- Better color contrast for accessibility

## 🛠️ Tech Stack

- **React 19** - UI Framework
- **Vite** - Build Tool
- **Tailwind CSS 4** - Styling
- **Recharts** - Data Visualization
- **React Icons** - Icon Library
- **date-fns** - Date Formatting
- **GitHub API** - Data Source

## 📦 Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🚀 Usage

1. **Search for Users**: Enter any GitHub username in the search bar
2. **View User Analytics**: See comprehensive stats, charts, and repository list
3. **Explore Repositories**: Click on any repository card to view detailed analytics
4. **Navigate Back**: Use the back buttons to return to previous views

## 📊 Analytics Features

### User Dashboard
- Total repositories, stars, followers, and languages used
- 30-day commit activity line chart
- Language distribution pie chart
- Repository list with stars and last update
- Bar chart showing stars vs forks for recent repos

### Repository Dashboard
- Repository statistics (stars, forks, watchers, issues, size)
- Language breakdown bar chart
- Top 5 contributors with commit counts
- Last 10 commits with author and date
- Full repository metadata

## 🎯 Key Improvements Summary

| Feature | Before | After |
|---------|--------|-------|
| Repository Access | View only | Click to explore details |
| Mobile Support | Basic | Fully responsive |
| Charts | 2 charts | 4+ charts with bar charts |
| Repositories Shown | 9 | 12 with pagination |
| Analytics Depth | User level | User + Repo level |
| Responsiveness | Desktop-first | Mobile-first |

## 📱 Responsive Breakpoints

- **Mobile**: < 640px (sm)
- **Tablet**: 640px - 1024px (md/lg)
- **Desktop**: > 1024px (xl)

## 🔑 API Usage

This app uses the GitHub REST API v3. No authentication required for basic usage, but rate limits apply:
- **Unauthenticated**: 60 requests/hour
- **Authenticated**: 5,000 requests/hour

To add authentication, create a `.env` file:
```env
VITE_GITHUB_TOKEN=your_github_personal_access_token
```

## 🎨 Color Scheme

- Primary: Blue (#3B82F6)
- Success: Green (#10B981)
- Warning: Yellow (#F59E0B)
- Danger: Red (#EF4444)
- Purple: (#8B5CF6)
- Background: Gray (#F9FAFB)

## 📂 Project Structure

```
src/
├── components/
│   ├── Navbar.jsx          # Navigation bar
│   ├── Footer.jsx          # Footer component
│   ├── SearchBar.jsx       # Search with autocomplete
│   └── LoadingSkeleton.jsx # Loading states
├── pages/
│   ├── Home.jsx            # Landing page
│   ├── Analytics.jsx       # User analytics dashboard
│   └── RepoAnalytics.jsx   # Repository details (NEW)
├── App.jsx                 # Main app with routing
└── main.jsx               # Entry point
```

## 🌟 Features in Detail

### Search Bar
- Real-time user suggestions
- Debounced API calls
- Avatar previews
- Keyboard navigation (Enter to search)

### User Analytics
- Profile information with avatar
- Follower/following counts
- Join date
- Bio and location
- Comprehensive statistics

### Repository Analytics (NEW)
- Detailed repository metrics
- Commit history visualization
- Contributor insights
- Language usage breakdown
- Issue tracking

## 🐛 Known Limitations

- Commit data uses mock data for the 30-day chart (GitHub API rate limits)
- Some private repositories may not be accessible
- API rate limits may affect heavy usage

## 🔮 Future Enhancements

- [ ] User authentication for higher API limits
- [ ] Compare multiple users side-by-side
- [ ] Export analytics as PDF/PNG
- [ ] Dark mode toggle
- [ ] Trending repositories section
- [ ] Advanced filtering and sorting
- [ ] Real-time commit data integration
- [ ] Repository comparison feature

## 📄 License

MIT License - Feel free to use this project for learning and development!

## 🤝 Contributing

Contributions are welcome! Feel free to submit issues and pull requests.

## 👨‍💻 Developer

Built with ❤️ using React + Vite + Tailwind CSS

---

**Happy Analyzing! 🎉**
