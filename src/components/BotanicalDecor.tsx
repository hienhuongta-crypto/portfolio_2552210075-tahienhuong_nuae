import React from 'react';

interface BlossomProps {
  cx: number;
  cy: number;
  scale?: number;
  rotate?: number;
  petalColor?: string;
  innerColor?: string;
}

const Blossom: React.FC<BlossomProps> = ({
  cx,
  cy,
  scale = 1,
  rotate = 0,
  petalColor = '#FAD8D1',
  innerColor = '#FDFBF7',
}) => (
  <g transform={`translate(${cx} ${cy}) rotate(${rotate}) scale(${scale})`}>
    {[0, 72, 144, 216, 288].map((angle) => (
      <g key={angle} transform={`rotate(${angle})`}>
        <path
          d="M0,-2 C5,-12 11,-17 8,-24 C4,-29 -4,-29 -8,-24 C-11,-17 -5,-12 0,-2 Z"
          fill={petalColor}
          stroke="#E8A598"
          strokeWidth="0.8"
        />
        <path
          d="M0,-3 C3,-10 6,-14 4,-19 C2,-22 -2,-22 -4,-19 C-6,-14 -3,-10 0,-3 Z"
          fill={innerColor}
          opacity="0.7"
        />
      </g>
    ))}
    <circle cx="0" cy="0" r="4.2" fill="#FDE68A" stroke="#D4B44C" strokeWidth="0.7" />
    {[0, 60, 120, 180, 240, 300].map((ang) => (
      <g key={ang} transform={`rotate(${ang})`}>
        <line x1="0" y1="-2" x2="0" y2="-7.5" stroke="#9E4D45" strokeWidth="0.7" opacity="0.65" />
        <circle cx="0" cy="-8" r="1.1" fill="#D4B44C" />
      </g>
    ))}
  </g>
);

interface ButterflyProps {
  className?: string;
  wingColor?: string;
  accentColor?: string;
  size?: number;
}

const Butterfly: React.FC<ButterflyProps> = ({
  className = '',
  wingColor = '#E8A598',
  accentColor = '#FDE68A',
  size = 54,
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 80 80"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <g className="animate-butterfly-wing">
      {/* Left upper & lower wings */}
      <path
        d="M39,38 C29,18 9,12 8,27 C7,37 21,42 38,41 Z"
        fill={wingColor}
        fillOpacity="0.82"
        stroke="#9E4D45"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <path
        d="M39,42 C25,44 13,52 17,61 C21,69 35,62 39,46 Z"
        fill={accentColor}
        fillOpacity="0.85"
        stroke="#9E4D45"
        strokeOpacity="0.4"
        strokeWidth="0.9"
      />
      <circle cx="20" cy="27" r="3.2" fill="#FDFBF7" fillOpacity="0.78" />
      <circle cx="24" cy="54" r="2.2" fill="#FDFBF7" fillOpacity="0.8" />

      {/* Right upper & lower wings */}
      <path
        d="M41,38 C51,18 71,12 72,27 C73,37 59,42 42,41 Z"
        fill={wingColor}
        fillOpacity="0.82"
        stroke="#9E4D45"
        strokeOpacity="0.45"
        strokeWidth="1"
      />
      <path
        d="M41,42 C55,44 67,52 63,61 C59,69 45,62 41,46 Z"
        fill={accentColor}
        fillOpacity="0.85"
        stroke="#9E4D45"
        strokeOpacity="0.4"
        strokeWidth="0.9"
      />
      <circle cx="60" cy="27" r="3.2" fill="#FDFBF7" fillOpacity="0.78" />
      <circle cx="56" cy="54" r="2.2" fill="#FDFBF7" fillOpacity="0.8" />
    </g>

    {/* Body and antennae */}
    <ellipse cx="40" cy="43" rx="2.1" ry="9.5" fill="#6E566C" />
    <circle cx="40" cy="32" r="2.1" fill="#3F2E3E" />
    <path
      d="M39,30 C36,23 32,20 29,21"
      stroke="#6E566C"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <path
      d="M41,30 C44,23 48,20 51,21"
      stroke="#6E566C"
      strokeWidth="1"
      strokeLinecap="round"
    />
    <circle cx="29" cy="21" r="1" fill="#9E4D45" />
    <circle cx="51" cy="21" r="1" fill="#9E4D45" />
  </svg>
);

export const BotanicalDecor: React.FC = () => {
  return (
    <aside
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 z-0 overflow-hidden select-none"
    >
      {/* Top-right sweeping cherry-blossom branch */}
      <svg
        viewBox="0 0 420 340"
        fill="none"
        className="animate-botanical-sway absolute -top-4 -right-6 h-56 w-72 opacity-65 sm:h-72 sm:w-96 sm:opacity-85 lg:h-80 lg:w-[420px]"
      >
        <path
          d="M430,12 C350,48 290,94 212,126 C158,148 104,154 54,182"
          stroke="#9E4D45"
          strokeOpacity="0.58"
          strokeWidth="4.2"
          strokeLinecap="round"
        />
        <path
          d="M312,78 C295,124 268,162 228,192"
          stroke="#9E4D45"
          strokeOpacity="0.5"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M236,115 C208,92 184,72 154,58"
          stroke="#9E4D45"
          strokeOpacity="0.48"
          strokeWidth="2.2"
          strokeLinecap="round"
        />
        <path
          d="M158,144 C132,172 114,202 96,232"
          stroke="#9E4D45"
          strokeOpacity="0.45"
          strokeWidth="1.9"
          strokeLinecap="round"
        />

        {/* Soft muted sage leaves harmonizing with #FFF0EE */}
        <path
          d="M348,54 C332,36 310,38 304,54 C318,64 336,64 348,54 Z"
          fill="#B6C4A3"
          fillOpacity="0.65"
        />
        <path
          d="M276,102 C288,80 310,82 314,98 C300,110 286,110 276,102 Z"
          fill="#C5D0B4"
          fillOpacity="0.65"
        />
        <path
          d="M188,128 C168,112 148,120 148,136 C164,144 178,140 188,128 Z"
          fill="#B6C4A3"
          fillOpacity="0.62"
        />
        <path
          d="M242,172 C260,164 274,176 268,192 C254,194 244,184 242,172 Z"
          fill="#C5D0B4"
          fillOpacity="0.62"
        />
        <path
          d="M112,196 C94,186 78,196 82,212 C98,214 108,208 112,196 Z"
          fill="#B6C4A3"
          fillOpacity="0.58"
        />

        {/* Buds */}
        <ellipse cx="150" cy="56" rx="5.5" ry="9" transform="rotate(-38 150 56)" fill="#F3B8AD" />
        <ellipse cx="94" cy="234" rx="5" ry="8.5" transform="rotate(24 94 234)" fill="#F7CCC3" />
        <ellipse cx="52" cy="184" rx="5" ry="8" transform="rotate(-64 52 184)" fill="#F3B8AD" />

        {/* Blossoms */}
        <Blossom cx={368} cy={46} scale={0.95} rotate={12} petalColor="#FAD6CE" />
        <Blossom cx={292} cy={118} scale={0.82} rotate={-18} petalColor="#FDE68A" innerColor="#FDFBF7" />
        <Blossom cx={224} cy={190} scale={0.88} rotate={28} petalColor="#F6C2B8" />
        <Blossom cx={196} cy={82} scale={0.7} rotate={-8} petalColor="#FAD6CE" />
        <Blossom cx={124} cy={146} scale={0.76} rotate={42} petalColor="#FDFBF7" innerColor="#FAD6CE" />
      </svg>

      {/* Top-left delicate spray */}
      <svg
        viewBox="0 0 320 280"
        fill="none"
        className="animate-botanical-sway-alt absolute -top-2 -left-4 h-44 w-56 opacity-60 sm:h-60 sm:w-76 sm:opacity-80"
      >
        <path
          d="M-12,18 C52,52 104,88 164,106 C202,118 238,118 272,136"
          stroke="#9E4D45"
          strokeOpacity="0.52"
          strokeWidth="3.4"
          strokeLinecap="round"
        />
        <path
          d="M84,72 C102,108 118,140 144,166"
          stroke="#9E4D45"
          strokeOpacity="0.45"
          strokeWidth="2.1"
          strokeLinecap="round"
        />
        <path
          d="M148,100 C168,78 186,62 214,52"
          stroke="#9E4D45"
          strokeOpacity="0.42"
          strokeWidth="1.8"
          strokeLinecap="round"
        />

        <path
          d="M52,54 C68,36 86,40 88,56 C74,64 62,62 52,54 Z"
          fill="#B6C4A3"
          fillOpacity="0.6"
        />
        <path
          d="M192,112 C210,98 228,106 226,122 C210,128 198,122 192,112 Z"
          fill="#C5D0B4"
          fillOpacity="0.6"
        />
        <path
          d="M114,132 C98,126 88,140 96,154 C110,152 118,142 114,132 Z"
          fill="#B6C4A3"
          fillOpacity="0.56"
        />

        <ellipse cx="216" cy="52" rx="4.5" ry="7.5" transform="rotate(48 216 52)" fill="#F3B8AD" />
        <ellipse cx="274" cy="138" rx="4.5" ry="7.5" transform="rotate(75 274 138)" fill="#F7CCC3" />

        <Blossom cx={48} cy={52} scale={0.85} rotate={-15} petalColor="#FAD6CE" />
        <Blossom cx={142} cy={164} scale={0.78} rotate={20} petalColor="#F6C2B8" />
        <Blossom cx={176} cy={88} scale={0.68} rotate={-25} petalColor="#FDE68A" innerColor="#FDFBF7" />
      </svg>

      {/* Bottom-left gentle floral sprig */}
      <svg
        viewBox="0 0 300 240"
        fill="none"
        className="animate-botanical-sway-bottom hidden sm:block absolute bottom-4 -left-4 h-52 w-64 opacity-75"
      >
        <path
          d="M-10,210 C48,176 96,144 156,126 C192,114 222,94 248,68"
          stroke="#9E4D45"
          strokeOpacity="0.48"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M92,152 C118,162 146,166 176,160"
          stroke="#9E4D45"
          strokeOpacity="0.4"
          strokeWidth="1.9"
          strokeLinecap="round"
        />
        <path
          d="M62,174 C52,154 66,136 82,140 C86,156 76,168 62,174 Z"
          fill="#B6C4A3"
          fillOpacity="0.6"
        />
        <path
          d="M174,118 C166,98 182,84 198,92 C196,108 186,116 174,118 Z"
          fill="#C5D0B4"
          fillOpacity="0.6"
        />
        <Blossom cx={64} cy={176} scale={0.84} rotate={18} petalColor="#FAD6CE" />
        <Blossom cx={174} cy={158} scale={0.74} rotate={-14} petalColor="#FDE68A" innerColor="#FDFBF7" />
        <Blossom cx={242} cy={72} scale={0.65} rotate={30} petalColor="#F6C2B8" />
      </svg>

      {/* Bottom-right subtle branch */}
      <svg
        viewBox="0 0 280 220"
        fill="none"
        className="animate-botanical-sway hidden md:block absolute bottom-2 -right-4 h-48 w-60 opacity-75"
      >
        <path
          d="M290,196 C230,170 184,136 126,118 C92,108 66,88 46,66"
          stroke="#9E4D45"
          strokeOpacity="0.48"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M170,138 C154,158 134,174 106,184"
          stroke="#9E4D45"
          strokeOpacity="0.4"
          strokeWidth="1.8"
          strokeLinecap="round"
        />
        <path
          d="M214,156 C224,136 208,122 192,128 C192,144 202,154 214,156 Z"
          fill="#B6C4A3"
          fillOpacity="0.6"
        />
        <Blossom cx={208} cy={156} scale={0.82} rotate={-22} petalColor="#FAD6CE" />
        <Blossom cx={106} cy={182} scale={0.72} rotate={15} petalColor="#F6C2B8" />
        <Blossom cx={50} cy={70} scale={0.62} rotate={-10} petalColor="#FDFBF7" innerColor="#FAD6CE" />
      </svg>

      {/* Floating Butterflies */}
      <div className="animate-butterfly-a absolute top-28 right-6 sm:top-36 sm:right-14 lg:right-24">
        <Butterfly size={54} wingColor="#E8A598" accentColor="#FDE68A" />
      </div>

      <div className="animate-butterfly-b hidden sm:block absolute top-44 left-8 lg:left-16">
        <Butterfly size={44} wingColor="#FDE68A" accentColor="#FAD6CE" />
      </div>

      <div className="animate-butterfly-c hidden md:block absolute bottom-28 right-12 lg:right-24">
        <Butterfly size={48} wingColor="#F3B8AD" accentColor="#FDFBF7" />
      </div>

      {/* Gentle drifting flower petals along side margins */}
      <svg
        width="16"
        height="16"
        viewBox="0 0 20 20"
        className="animate-petal-drift absolute top-24 right-24 sm:right-40 [animation-delay:0s]"
      >
        <path d="M10,2 C14,6 16,13 10,18 C4,13 6,6 10,2 Z" fill="#F5C3B8" opacity="0.85" />
      </svg>
      <svg
        width="14"
        height="14"
        viewBox="0 0 20 20"
        className="animate-petal-drift absolute top-36 right-12 sm:right-20 [animation-delay:3.2s]"
      >
        <path d="M10,2 C14,6 16,13 10,18 C4,13 6,6 10,2 Z" fill="#FDE68A" opacity="0.85" />
      </svg>
      <svg
        width="15"
        height="15"
        viewBox="0 0 20 20"
        className="animate-petal-drift hidden sm:block absolute top-28 left-24 [animation-delay:5.5s]"
      >
        <path d="M10,2 C14,6 16,13 10,18 C4,13 6,6 10,2 Z" fill="#FAD6CE" opacity="0.85" />
      </svg>
      <svg
        width="13"
        height="13"
        viewBox="0 0 20 20"
        className="animate-petal-drift hidden md:block absolute bottom-56 left-16 [animation-delay:2s]"
      >
        <path d="M10,2 C14,6 16,13 10,18 C4,13 6,6 10,2 Z" fill="#FDFBF7" opacity="0.9" />
      </svg>
    </aside>
  );
};

export const PortraitBotanicalFrame: React.FC = () => {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute -inset-6 sm:-inset-8 z-20 select-none"
    >
      <svg
        viewBox="0 0 360 360"
        fill="none"
        className="h-full w-full overflow-visible"
      >
        {/* Subtle circular botanical halo */}
        <circle
          cx="180"
          cy="180"
          r="150"
          stroke="#E8A598"
          strokeOpacity="0.45"
          strokeWidth="1.2"
          strokeDasharray="4 6"
        />

        {/* Upper-right curved flowering branch hugging the portrait rim */}
        <g className="animate-botanical-sway">
          <path
            d="M148,30 C216,16 286,52 320,118 C338,154 340,192 330,226"
            stroke="#9E4D45"
            strokeOpacity="0.72"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M242,46 C266,36 290,34 312,42"
            stroke="#9E4D45"
            strokeOpacity="0.6"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M312,102 C332,96 346,104 354,116"
            stroke="#9E4D45"
            strokeOpacity="0.55"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Soft sage leaves */}
          <path
            d="M196,26 C208,10 226,14 226,28 C214,36 202,34 196,26 Z"
            fill="#B6C4A3"
            fillOpacity="0.82"
          />
          <path
            d="M278,56 C294,42 310,50 306,66 C292,72 282,66 278,56 Z"
            fill="#C5D0B4"
            fillOpacity="0.82"
          />
          <path
            d="M326,154 C344,146 354,162 344,174 C332,174 326,166 326,154 Z"
            fill="#B6C4A3"
            fillOpacity="0.8"
          />
          <path
            d="M332,196 C318,208 320,224 334,226 C342,216 340,204 332,196 Z"
            fill="#C5D0B4"
            fillOpacity="0.78"
          />

          {/* Buds */}
          <ellipse cx="146" cy="31" rx="4.5" ry="7.5" transform="rotate(-76 146 31)" fill="#F3B8AD" />
          <ellipse cx="314" cy="43" rx="4.5" ry="7.5" transform="rotate(64 314 43)" fill="#FDE68A" />
          <ellipse cx="330" cy="228" rx="4.5" ry="7.5" transform="rotate(14 330 228)" fill="#F7CCC3" />

          {/* Blossoms */}
          <Blossom cx={256} cy={46} scale={0.76} rotate={14} petalColor="#FAD6CE" />
          <Blossom cx={312} cy={104} scale={0.68} rotate={-16} petalColor="#FDE68A" innerColor="#FDFBF7" />
          <Blossom cx={334} cy={176} scale={0.58} rotate={24} petalColor="#F6C2B8" />
        </g>

        {/* Lower-left curved flowering branch hugging the portrait rim */}
        <g className="animate-botanical-sway-bottom">
          <path
            d="M204,332 C138,342 74,306 42,244 C26,214 22,180 28,150"
            stroke="#9E4D45"
            strokeOpacity="0.72"
            strokeWidth="3.2"
            strokeLinecap="round"
          />
          <path
            d="M108,314 C84,324 64,324 44,316"
            stroke="#9E4D45"
            strokeOpacity="0.58"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M46,248 C26,250 14,242 8,228"
            stroke="#9E4D45"
            strokeOpacity="0.55"
            strokeWidth="1.8"
            strokeLinecap="round"
          />

          {/* Soft sage leaves */}
          <path
            d="M158,332 C146,348 128,342 130,328 C142,320 152,324 158,332 Z"
            fill="#B6C4A3"
            fillOpacity="0.82"
          />
          <path
            d="M78,298 C60,308 46,298 52,284 C66,280 74,288 78,298 Z"
            fill="#C5D0B4"
            fillOpacity="0.82"
          />
          <path
            d="M32,196 C14,200 8,184 20,174 C30,176 34,186 32,196 Z"
            fill="#B6C4A3"
            fillOpacity="0.8"
          />

          {/* Buds */}
          <ellipse cx="206" cy="332" rx="4.5" ry="7.5" transform="rotate(82 206 332)" fill="#F3B8AD" />
          <ellipse cx="42" cy="315" rx="4.5" ry="7.5" transform="rotate(-112 42 315)" fill="#F7CCC3" />
          <ellipse cx="28" cy="148" rx="4.5" ry="7.5" transform="rotate(14 28 148)" fill="#FDE68A" />

          {/* Blossoms */}
          <Blossom cx={98} cy={312} scale={0.78} rotate={-20} petalColor="#FAD6CE" />
          <Blossom cx={46} cy={248} scale={0.68} rotate={18} petalColor="#FDFBF7" innerColor="#FAD6CE" />
          <Blossom cx={30} cy={196} scale={0.56} rotate={-10} petalColor="#FDE68A" innerColor="#FDFBF7" />
        </g>
      </svg>

      {/* Fluttering butterflies framing the portrait */}
      <div className="animate-butterfly-b absolute -top-2 left-3 sm:top-0 sm:left-4">
        <Butterfly size={44} wingColor="#FDE68A" accentColor="#E8A598" />
      </div>

      <div className="animate-butterfly-a absolute right-1 bottom-6 sm:right-2 sm:bottom-8">
        <Butterfly size={48} wingColor="#E8A598" accentColor="#FDE68A" />
      </div>

      {/* Tiny drifting petals near the portrait */}
      <svg
        width="13"
        height="13"
        viewBox="0 0 20 20"
        className="animate-petal-drift absolute top-10 right-2 [animation-delay:0.8s]"
      >
        <path d="M10,2 C14,6 16,13 10,18 C4,13 6,6 10,2 Z" fill="#F5C3B8" opacity="0.88" />
      </svg>
      <svg
        width="12"
        height="12"
        viewBox="0 0 20 20"
        className="animate-petal-drift absolute bottom-20 left-2 [animation-delay:4.2s]"
      >
        <path d="M10,2 C14,6 16,13 10,18 C4,13 6,6 10,2 Z" fill="#FDE68A" opacity="0.9" />
      </svg>
    </div>
  );
};

