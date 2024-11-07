import { HairProps } from "./HAIR_TYPES";

export default function Parted({ color, strokeWidth, shadowOpacity }: HairProps) {
    return (
        <g strokeWidth={strokeWidth}>
            <path d="m 167.60539,272.68608 c 32.52,-2.227 79.972,-34.623 99.43,-46.874 42.233,33.699 90.47,42.355 116.091,43.281 25.248,0.912 52.238,-1.622 69.703,-1.869 1.014,-22.612 -3.034,-32.587 -12.706,-35.005 -36.182,-9.045 -78.688,-19.456 -117.403,-27.241 -43.941,-8.837 -83,-14.291 -102.391,-10.528 -38.561,7.482 -49.133,68.984 -52.724,78.236 z"
                fill="#562e3e"
                fillOpacity={shadowOpacity} />
            <path d="m 285.70492,429.50974 h -1.52861 c -36.87912,0 -67.9125,27.09665 -74.88168,59.94304 -32.84761,-0.004 -62.43384,-5.66304 -84.88269,-23.69003 18.02276,-27.46662 22.83497,-92.66978 15.88589,-151.02673 -3.12281,-26.22241 2.10831,-52.74031 8.00482,-76.96148 15.90599,-65.33625 59.3798,-115.75297 163.40235,-114.86041 103.82261,0.89133 146.56333,49.87459 162.21966,114.04477 5.93776,24.33962 9.69951,55.87342 7.97943,77.77712 -7.41877,94.48053 -2.99374,108.76269 17.02415,150.86189 -14.98671,15.70707 -53.25373,25.55208 -87.66804,24.14059 -7.06862,-34.89891 -38.46061,-59.46929 -74.85311,-60.21167 65.90573,-4.21859 118.13017,-59.08101 118.13017,-126.04364 v -19.16497 c 0,-10.94147 -1.39426,-21.55815 -4.01458,-31.68521 -29.2731,-3.47988 -112.55736,19.62529 -189.14325,-47.65114 -21.45446,18.55325 -59.46232,44.8245 -89.52458,47.65114 -2.62032,10.12706 -4.01352,20.74374 -4.01352,31.68521 v 19.16497 c 0,66.87228 52.08268,121.67731 117.86359,126.02655 z"
                fill={color}
                stroke="#000000" />
            <path d="m 143.82199,363.89848 c 2.706,-29.242 -17.78,-171.667 78.294,-219.332 54.386,-26.983 103.973,-15.721 111.167,-16.889 -13.462,2.302 -50.137,-0.564 -118.826,42.341 -8.894,5.555 -31.102,26.912 -38.91,44.467 -24.941,56.079 -29.259,144.871 -31.725,149.413 z"
                fill="#ffffff"
                fillOpacity="0.07" />
            <path d="m 446.11799,348.87941 h 0.915 c 0,0 -16.293,40.11064 -15.739,90.84119 0.2,18.28272 0.599,46.24343 0.599,46.24343 l -21.655,-0.57535 c -8.699,-32.57525 -38.972,-55.15102 -73.833,-55.86261 50.16,-3.21097 92.395,-35.75682 109.713,-80.64666 z m -235.833,136.50927 -18.932,0.57535 c 0,0 0.55,-25.71911 0.243,-45.96213 -0.751,-49.44949 -16.769,-91.12249 -16.769,-91.12249 h 1.429 c 17.287,44.81045 59.403,77.32003 109.447,80.62902 h -1.529 c -35.346,0 -65.322,24.89186 -73.889,55.88025 z"
                fillOpacity="0.2" />
        </g>
    )
}