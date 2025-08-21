declare global {
  interface Window {
    marked: {
      parse: (markdown: string) => string;
      setOptions: (options: any) => void;
    };
  }
}

export const parseMarkdown = (text: string): string => {
  if (typeof window !== 'undefined' && window.marked) {
    window.marked.setOptions({
      breaks: true,
      gfm: true,
    });
    
    return window.marked.parse(text);
  }
  
  return text.replace(/\n/g, '<br>');
};