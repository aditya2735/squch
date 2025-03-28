"use client";

import React, { useRef, useState, useEffect } from "react";

const CustomCircularSlider = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [value, setValue] = useState(1);
  const [isDragging, setIsDragging] = useState(false);
  const [isLocked, setIsLocked] = useState(false);
  const knobAngleRef = useRef(0);
  const previousAngleRef = useRef<number | null>(null);

  const [knobColor, setKnobColor] = useState("#02cab5"); // Initial knob color

  const size = 300;
  const center = size / 2;
  const radius = 85;

  const angleToValue = (angle: number) => {
    return Math.min(Math.max(Math.round((angle / 360) * 12), 1), 12);
  };

  const valueToAngle = (val: number) => {
    return (val / 12) * 360;
  };

  const drawSlider = () => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.clearRect(0, 0, size, size);

    // Background track
    ctx.beginPath();
    ctx.arc(center, center, radius, 0, Math.PI * 2);
    ctx.strokeStyle = "#ddd";
    ctx.lineWidth = 30;
    ctx.stroke();

    // Progress arc
    const endAngle = (valueToAngle(value) * Math.PI) / 180;
    ctx.beginPath();
    ctx.arc(center, center, radius, -Math.PI / 2, endAngle - Math.PI / 2);
    ctx.strokeStyle = "#652669";
    ctx.lineWidth = 30;
    ctx.stroke();

    // Knob
    const knobAngle = knobAngleRef.current;
    const angleRad = (knobAngle - 90) * (Math.PI / 180);
    const knobX = center + radius * Math.cos(angleRad);
    const knobY = center + radius * Math.sin(angleRad);
    ctx.beginPath();
    ctx.arc(knobX, knobY, 14, 0, Math.PI * 2);
    ctx.fillStyle = knobColor;
    ctx.fill();
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging) return;

    const rect = canvasRef.current!.getBoundingClientRect();
    const x = e.clientX - rect.left - center;
    const y = e.clientY - rect.top - center;

    let angle = Math.atan2(y, x) * (180 / Math.PI) + 90;
    if (angle < 0) angle += 360;

    const newValue = angleToValue(angle);
    const prevAngle = previousAngleRef.current;

    if (value === 12) {
      if (prevAngle !== null && angle < 60 && prevAngle > 300) {
        return;
      }

      if (newValue < 12) {
        setIsLocked(false);
        setValue(newValue);
        knobAngleRef.current = valueToAngle(newValue);
        previousAngleRef.current = angle;
        setKnobColor("#02cab5"); // darker blue while dragging
      }
      return;
    }

    setValue(newValue);
    knobAngleRef.current = valueToAngle(newValue);
    previousAngleRef.current = angle;
    if (newValue === 12) {
      setIsLocked(true);
      setKnobColor("red"); // gray when locked
    } else {
      setKnobColor("#02cab5"); // darker blue while dragging
    }
  };

  useEffect(() => {
    drawSlider();
  }, [value, knobColor]);

  useEffect(() => {
    const stopDragging = () => {
      setIsDragging(false);
      previousAngleRef.current = null;

      if (value === 12) {
        setKnobColor("#02cab5"); // gray if locked
      } else {
        setKnobColor("#02cab5"); // back to normal
      }
    };

    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", stopDragging);
    }

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", stopDragging);
    };
  }, [isDragging, value]);

  return (
    <div style={{ textAlign: "center"}}>
      <canvas
        ref={canvasRef}
        width={size}
        height={size}
        onMouseDown={() => {
          setIsDragging(true);
          if (!isLocked) setKnobColor("#02cab5"); // darker while dragging
        }}
        style={{ cursor: isLocked ? "not-allowed" : "pointer" }}
      />
      <p className="month-text">
        <span className="month-number">
          {value}
        </span>{" "}
        <span className="month-label">
          Month{value > 1 ? "s" : ""}
        </span>
      </p>

    </div>
  );
};

export default CustomCircularSlider;
