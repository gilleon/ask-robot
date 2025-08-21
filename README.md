# Ask Robot - Elementary Tutor

A React TypeScript chat application that provides elementary school tutoring using an AI assistant powered by Ollama. The app features a clean dark mode interface with markdown support for rich content formatting.

## Features

- AI-powered elementary school tutoring
- Dark mode interface
- Full markdown support (tables, images, code blocks, lists)
- Real-time chat interface
- Responsive design with Tailwind CSS
- Loading states and error handling

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: Marked.js (via CDN)
- **API**: Ollama LLM (gpt-oss:120b model)
- **HTTP Client**: Axios

## Project Structure

```
src/
├── components/
│   ├── ChatInput.tsx      # Message input component
│   ├── ChatMessage.tsx    # Individual message display
│   ├── ChatMessages.tsx   # Messages container
│   ├── EmptyState.tsx     # Welcome message
│   ├── Header.tsx         # App header
│   └── LoadingMessage.tsx # Loading indicator
├── hooks/
│   └── useChat.ts         # Chat logic custom hook
├── types/
│   └── index.ts           # TypeScript interfaces
├── utils/
│   ├── api.ts             # API communication
│   └── markdown.ts        # Markdown parsing utilities
├── App.tsx                # Main app component
├── App.css                # Global styles and markdown styling
└── index.tsx              # App entry point
```

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Access to Ollama API endpoint

### Installation

1. Clone the repository:
```bash
git clone https://github.com/gilleon/ask-robot.git
cd ask-robot
```

2. Install dependencies:
```bash
npm install
```

3. Install additional packages:
```bash
npm install axios
npm install -D tailwindcss postcss autoprefixer
```

4. Initialize Tailwind CSS:
```bash
npx tailwindcss init -p
```

5. Update the API configuration in `src/utils/api.ts` if needed:
```typescript
const OLLAMA_API_URL = "https://ollama.utahtech.dev/api/chat";
const MODEL = "gpt-oss:120b";
```

### Available Scripts

#### `npm start`
Runs the app in development mode at [http://localhost:3000](http://localhost:3000).

#### `npm test`
Launches the test runner in interactive watch mode.


## Configuration

### Tailwind Configuration
The app uses Tailwind CSS with custom configuration in `tailwind.config.js`:

```javascript
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

### Markdown Support
Markdown rendering is handled by Marked.js loaded via CDN. The library is configured in `src/utils/markdown.ts` with:
- GitHub Flavored Markdown support
- Line break handling
- Custom styling for dark mode

### API Integration
The app connects to an Ollama API endpoint with:
- Model: `gpt-oss:120b`
- System prompt optimized for elementary school tutoring
- Error handling and retry logic

## Styling

The app features a comprehensive dark mode design with:
- **Colors**: Gray-based palette (gray-700 to gray-900)
- **Accents**: Blue for user messages, green for assistant
- **Typography**: Responsive text sizing with proper contrast
- **Components**: Rounded corners, shadows, and smooth transitions

### Markdown Styling
Custom CSS classes provide dark mode styling for:
- Headers (h1, h2, h3)
- Code blocks and inline code
- Tables with borders and hover effects
- Lists and blockquotes
- Images and links

## Components

### Core Components
- **App**: Main application container
- **Header**: Application title and branding
- **ChatMessages**: Message history container
- **ChatMessage**: Individual message with markdown rendering
- **ChatInput**: Message input with keyboard handling
- **EmptyState**: Welcome message for new users
- **LoadingMessage**: Typing indicator

### Custom Hooks
- **useChat**: Manages chat state, message sending, and API integration

### Utilities
- **api.ts**: Ollama API communication
- **markdown.ts**: Markdown parsing and rendering

