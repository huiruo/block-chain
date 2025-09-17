"use client"

import React, { useRef, useState } from 'react';

interface Props {
  path: string;
  width?: string | number;
  height?: string | number;
  autoPlay?: boolean;
  controls?: boolean;
  loop?: boolean;
  muted?: boolean;
  poster?: string;
  className?: string;
  title?: string;
  description?: string;
}

const VideoBox: React.FC<Props> = ({ 
  path, 
  width = '100%', 
  height = 'auto',
  autoPlay = false,
  controls = true,
  loop = false,
  muted = false,
  poster,
  className = '',
  title,
  description
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [hasError, setHasError] = useState(false);

  const handleLoadStart = () => {
    setIsLoading(true);
    setHasError(false);
  };

  const handleCanPlay = () => {
    setIsLoading(false);
  };

  const handleError = (e: React.SyntheticEvent<HTMLVideoElement, Event>) => {
    console.error('视频加载失败:', path, e);
    setIsLoading(false);
    setHasError(true);
  };

  const containerStyle: React.CSSProperties = {
    margin: '30px 0',
    padding: '20px 0',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    position: 'relative',
    width: '100%',
    maxWidth: '800px',
    marginLeft: 'auto',
    marginRight: 'auto',
    clear: 'both'
  };

  const videoStyle: React.CSSProperties = {
    width: width,
    height: height,
    maxWidth: '100%',
    maxHeight: '400px',
    borderRadius: '12px',
    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.15)',
    backgroundColor: '#000',
    objectFit: 'contain'
  };


  const errorStyle: React.CSSProperties = {
    padding: '20px',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
    border: '1px solid #dee2e6',
    borderRadius: '8px',
    color: '#6c757d'
  };

  return (
    <div className={`video-container ${className}`} style={containerStyle}>
      {title && (
        <h3 style={{ 
          marginBottom: '10px', 
          fontSize: '18px', 
          fontWeight: '600',
          color: '#333',
          textAlign: 'center'
        }}>
          {title}
        </h3>
      )}
      
      {description && (
        <p style={{ 
          marginBottom: '15px', 
          fontSize: '14px', 
          color: '#666',
          textAlign: 'center',
          maxWidth: '600px'
        }}>
          {description}
        </p>
      )}

      <div style={{ 
        position: 'relative', 
        width: '100%',
        marginTop: '10px',
        marginBottom: '20px'
      }}>
        {hasError ? (
          <div style={errorStyle}>
            <p>❌ 视频加载失败</p>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>
              请检查视频文件路径是否正确：<code>{path}</code>
            </p>
            <p style={{ fontSize: '12px', marginTop: '8px' }}>
              <a 
                href={path} 
                target="_blank" 
                rel="noopener noreferrer"
                style={{ color: '#007bff', textDecoration: 'none' }}
              >
                🔗 尝试直接访问视频文件
              </a>
            </p>
          </div>
        ) : (
            <video
              ref={videoRef}
              src={path}
              style={videoStyle}
              controls={controls}
              autoPlay={autoPlay}
              loop={loop}
              muted={muted}
              poster={poster}
              onLoadStart={handleLoadStart}
              onCanPlay={handleCanPlay}
              onError={handleError}
              preload="metadata"
              playsInline
            >
              <p>您的浏览器不支持 HTML5 视频播放。</p>
              <p>
                请
                <a 
                  href={path} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={{ color: '#007bff', textDecoration: 'none' }}
                >
                  点击这里
                </a>
                下载视频文件。
              </p>
            </video>
        )}
      </div>
    </div>
  );
};

export default VideoBox;