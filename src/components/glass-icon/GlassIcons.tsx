import React from 'react';
import './GlassIcons.css';

export interface GlassIconsItem {
  icon: React.ReactElement;
  color: string;
  label: string;
  customClass?: string;
  link?: string;
}

export interface GlassIconsProps {
  items: GlassIconsItem[];
  className?: string;
  style?: React.CSSProperties;
}

const gradientMapping: Record<string, string> = {
  blue: 'linear-gradient(90deg, #00a0dc, #004182, #000000)',
  purple: 'linear-gradient(90deg, #f9ce34, #ee2a7b, #6228d7)',
  red: 'linear-gradient(hsl(3, 90%, 50%), hsl(348, 90%, 50%))',
  indigo: 'linear-gradient(hsl(253, 90%, 50%), hsl(238, 90%, 50%))',
  orange: 'linear-gradient(hsl(43, 90%, 50%), hsl(28, 90%, 50%))',
  green: 'linear-gradient(hsl(123, 90%, 40%), hsl(108, 90%, 40%))'
};

const GlassIcons: React.FC<GlassIconsProps> = ({ items, className, style }) => {
  const getBackgroundStyle = (color: string): React.CSSProperties => {
    if (gradientMapping[color]) {
      return { background: gradientMapping[color] };
    }
    return { background: color };
  };

  return (
    <div className={`icon-btns ${className || ''}`} style={style}>
      {items.map((item, index) => (
        <button key={index} type="button" style={{ border:'none', cursor:'pointer' }} className={`icon-btn ${item.customClass || ''}`} aria-label={item.label} onClick={() => window.open(item?.link || '', '_blank')}>
          <span className="icon-btn__back" style={ getBackgroundStyle(item.color) }></span>
          <span className="icon-btn__front">
            <span className="icon-btn__icon" aria-hidden="true">
              {item.icon}
            </span>
          </span>
          <span className="icon-btn__label" style={{color: '#D3D3D3'}}>{item.label}</span>
        </button>
      ))}
    </div>
  );
};

export default GlassIcons;
