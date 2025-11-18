import './GradientText.css';
import { type ReactNode } from 'react';

interface GradientTextProps {
  children: ReactNode;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  style?: React.CSSProperties;
  textStyle?: React.CSSProperties;
}

export default function GradientText({
  children,
  className = '',
  colors = ['#6f24ff', '#3e4dff', '#00d4ff', '#3e4dff', '#6f24ff'],
  animationSpeed = 8,
  showBorder = false,
  style = {},
  textStyle = {}
}: GradientTextProps) {
  const gradientStyle = {
    backgroundImage: `linear-gradient(to right, ${colors.join(', ')})`,
    animationDuration: `${animationSpeed}s`
  };

  return (
    <div className={`animated-gradient-text ${className}`} style={style}>
      {showBorder && <div className="gradient-overlay" style={gradientStyle}></div>}
      <div className="text-content" style={{ ...gradientStyle, ...textStyle }}>
        {children}
      </div>
    </div>
  );
}
