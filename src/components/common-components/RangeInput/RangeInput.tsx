import React from 'react';
import styled from "styled-components";

const height = "20px";
const thumbHeight = 20;
const trackHeight = "1px";

const upperColor = "#E1E1E1";
const lowerColor = "#FF9514";
const thumbColor = "#FF9514";
const thumbHoverColor = "#FF9514";
const upperBackground = `linear-gradient(to bottom, ${upperColor}, ${upperColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;
const lowerBackground = `linear-gradient(to bottom, ${lowerColor}, ${lowerColor}) 100% 50% / 100% ${trackHeight} no-repeat transparent`;

const makeLongShadow = (color: string, size: string) => {
    let i = 10;
    let shadow = `${i}px 0 0 ${size} ${color}`;

    for (; i < 706; i++) {
        shadow = `${shadow}, ${i}px 0 0 ${size} ${color}`;
    }

    return shadow;
};

const Range = styled.input`
  overflow: hidden;
  display: block;
  appearance: none;
  width: calc(100% - 32px);
  margin: 0;
  height: ${height};
  cursor: pointer;
  position: absolute;
  bottom: -26px;
  left: 16px;
  background-color: transparent;

  &:focus {
    outline: none;
  }

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: ${height};
    background: ${lowerBackground};
  }

  &::-webkit-slider-thumb {
    position: relative;
    appearance: none;
    height: ${thumbHeight}px;
    width: ${thumbHeight}px;
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    top: 50%;
    transform: translateY(-50%);
    box-shadow: ${makeLongShadow(upperColor, "-9px")};
    transition: background-color 150ms;
  }

  &::-moz-range-track,
  &::-moz-range-progress {
    width: 100%;
    height: ${height};
    background: ${upperBackground};
  }

  &::-moz-range-progress {
    background: ${lowerBackground};
  }

  &::-moz-range-thumb {
    appearance: none;
    margin: 0;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
  }

  &::-ms-track {
    width: 100%;
    height: ${height};
    border: 0;
    color: transparent;
    background: transparent;
  }

  &::-ms-fill-lower {
    background: ${lowerBackground};
  }

  &::-ms-fill-upper {
    background: ${upperBackground};
  }

  &::-ms-thumb {
    appearance: none;
    height: ${thumbHeight};
    width: ${thumbHeight};
    background: ${thumbColor};
    border-radius: 100%;
    border: 0;
    transition: background-color 150ms;
    top: 0;
    margin: 0;
    box-shadow: none;
  }

  &:hover,
  &:focus {
    &::-webkit-slider-thumb {
      background-color: ${thumbHoverColor};
    }

    &::-moz-range-thumb {
      background-color: ${thumbHoverColor};
    }

    &::-ms-thumb {
      background-color: ${thumbHoverColor};
    }
  }
`;

interface IRangeInputProps {
    min: string;
    max: string;
    value: string;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const RangeInput = ({ min, max, value, onChange }: IRangeInputProps) => {
    return (
        <Range type="range" step="1" min={ min } max={ max } value={ value } onChange={ onChange }/>
    );
};

export default RangeInput;