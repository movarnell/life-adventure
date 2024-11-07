import { HairProps } from "./HAIR_TYPES"

export default function Bun({ color, strokeWidth, shadowOpacity }: HairProps) {
    return (
        <g strokeWidth={strokeWidth}>
            <ellipse
                cx="312.68915"
                cy="151.38748"
                rx="72.402"
                ry="43.323002"
                fill={color}
                stroke="#000000" />
            <path
                d="m 169.21703,301.66181 c 0.264,-0.47811 23.527,-53.19844 137.713,-54.28236 19.427,-0.1847 54.075,-20.14797 54.075,-20.14797 20.305,33.89587 56.772,33.62779 91.234,72.7976 0,0 -8.985,-52.18102 -47.808,-69.16695 -10.23,-7.75101 -22.166,-36.87427 -36.947,-39.43683 -47.557,-8.24494 -112.082,30.06786 -139.909,35.76608 -38.561,7.89665 -54.767,64.70463 -58.358,74.47043 z"
                fill="#562e3e"
                fillOpacity={shadowOpacity} />
            <path
                d="m 170.23276,311.6521 c -7.05698,-27.88298 -3.55017,-54.04923 1.25568,-70.4303 9.87619,-33.66447 48.30401,-91.59406 136.63955,-92.15329 91.00769,-0.57753 126.76654,45.88434 144.43915,89.58795 6.58623,16.28827 8.93257,48.0907 3.18627,72.28257 -21.60891,-68.07497 -43.27071,-37.45448 -95.07411,-108.06549 0,0 -41.75797,30.0515 -73.14044,30.60095 -119.38796,2.09037 -117.3061,78.17761 -117.3061,78.17761 z"
                fill={color}
                stroke="#000000" />
            <path
                d="m 170.29927,291.19963 c 1.26749,-9.56302 -3.57332,-19.0633 4.65042,-48.76237 7.24448,-26.16099 33.57984,-65.22747 73.2389,-78.95844 47.93834,-16.59735 80.87737,-8.55425 87.2175,-9.27269 -11.86493,1.41597 -59.38635,5.65281 -114.32411,42.313 -33.95269,22.65736 -48.60911,91.8867 -50.78271,94.6805 z"
                fill="#ffffff"
                fillOpacity="0.07" />
            <path
                d="m 244.27045,156.5883 c 0.60718,-3.03677 -1.71173,-6.05361 2.22771,-15.48463 3.47034,-8.3075 16.08585,-20.71317 35.08385,-25.07347 22.96404,-5.27054 37.53998,-3.86144 40.57711,-4.08939 -19.83065,3.46258 -30.62421,9.114 -46.21985,16.89919 -15.91231,7.94321 -30.62759,26.86112 -31.66882,27.7483 z"
                fill="#ffffff"
                fillOpacity="0.07" />
        </g>
    )
}