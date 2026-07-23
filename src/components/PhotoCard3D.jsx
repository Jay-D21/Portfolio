import { useRef, useCallback } from 'react';

export default function PhotoCard3D() {
  const cardRef = useRef(null);

  const handleMouseMove = useCallback((e) => {
    const card = cardRef.current;
    if (!card) return;
    const rect = card.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = (e.clientX - cx) / (rect.width / 2);
    const dy = (e.clientY - cy) / (rect.height / 2);
    const rotateY = dx * 12;
    const rotateX = -dy * 10;
    card.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(1.02)`;
  }, []);

  const handleMouseLeave = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.6s cubic-bezier(.4,0,.2,1)';
    card.style.transform = 'rotateX(0deg) rotateY(0deg) scale(1)';
  }, []);

  const handleMouseEnter = useCallback(() => {
    const card = cardRef.current;
    if (!card) return;
    card.style.transition = 'transform 0.1s linear';
  }, []);

  return (
    <div className="photo-stage">
      <div
        className="photo-card-3d"
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        onMouseEnter={handleMouseEnter}
      >
        <img src="/assets/jay.jpg" alt="Jay Deore" />
        <div className="photo-overlay" />
        <div className="photo-label">
          <div className="photo-label-name">Jay Deore</div>
          <div className="photo-label-role">Founder · Builder · AI Engineer</div>
        </div>
      </div>
      {/* Floating badges outside the card */}
      <div className="photo-badge-float">
        <span className="status-dot" />
        Available for roles
      </div>
      <div className="photo-badge-bottom">
        Founder @ i Labs
      </div>
    </div>
  );
}
