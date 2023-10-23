import React from "react";

export const Blob1 = props => {
  return (
    <svg
      width="736px"
      height="697px"
      viewBox="0 0 736 697"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M415.71 116.525C480.178 118.593 559.607 88.0115 603.549 135.229C646.952 181.866 601.213 258.173 606.61 321.653C612.278 388.335 675.226 461.192 635.858 515.31C595.945 570.179 506.721 535.979 440.373 550.177C388.341 561.312 342.873 590.084 289.667 589.394C222.491 588.524 142.119 596.373 97.9623 545.741C53.8103 495.115 78.8543 417.046 80.8006 349.899C82.564 289.059 68.8192 219.921 108.738 173.974C147.903 128.894 217.725 135.719 276.422 124.734C323.285 115.964 368.058 114.996 415.71 116.525Z"
        fill="url(#patternrec2)"
      />
      <defs>
        <pattern
          id="patternrec2"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        >
          <use
            href="#imagerec2"
            transform="translate(0 -0.049345) scale(0.015625 0.017167)"
          />
        </pattern>
        <image id="imagerec2" width="64" height="64" href={props.img} />
      </defs>
    </svg>
  );
};
