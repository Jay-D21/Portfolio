import { Code, Database, Terminal, Cpu, Layout, Globe, Box, Server, Layers, PenTool, Smartphone, Monitor } from 'lucide-react';
import './HeroBackground.css';

export default function HeroBackground() {
  const innerIcons = [
    { Icon: Code, color: '#3b82f6', angle: 0 },
    { Icon: Database, color: '#10b981', angle: 60 },
    { Icon: Terminal, color: '#f59e0b', angle: 120 },
    { Icon: Cpu, color: '#ef4444', angle: 180 },
    { Icon: Layout, color: '#8b5cf6', angle: 240 },
    { Icon: Globe, color: '#06b6d4', angle: 300 },
  ];

  const outerIcons = [
    { Icon: Box, color: '#f97316', angle: 30 },
    { Icon: Server, color: '#ec4899', angle: 90 },
    { Icon: Layers, color: '#14b8a6', angle: 150 },
    { Icon: PenTool, color: '#6366f1', angle: 210 },
    { Icon: Smartphone, color: '#84cc16', angle: 270 },
    { Icon: Monitor, color: '#eab308', angle: 330 },
  ];

  return (
    <div className="hero-background-container">
      {/* Inner Orbit */}
      <div className="hero-orbit orbit-inner">
        {innerIcons.map((item, index) => (
          <div 
            key={`inner-${index}`} 
            className="orbit-item"
            style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg)` }}
          >
            <div 
              className="orbit-icon-container"
              style={{ transform: `rotate(-${item.angle}deg)` }}
            >
              <div className="orbit-icon-wrapper" style={{ color: item.color }}>
                <item.Icon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Outer Orbit */}
      <div className="hero-orbit-outer orbit-outer">
        {outerIcons.map((item, index) => (
          <div 
            key={`outer-${index}`} 
            className="orbit-item"
            style={{ transform: `translate(-50%, -50%) rotate(${item.angle}deg)` }}
          >
            <div 
              className="orbit-icon-container"
              style={{ transform: `rotate(-${item.angle}deg)` }}
            >
              <div className="orbit-icon-wrapper" style={{ color: item.color }}>
                <item.Icon size={20} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
