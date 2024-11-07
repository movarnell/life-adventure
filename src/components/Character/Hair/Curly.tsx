import { HairProps } from "./HAIR_TYPES"

export default function Curly({ color, strokeWidth, shadowOpacity }: HairProps) {
    return (
        <g strokeWidth={strokeWidth}>
            <path d="m 173.14505,226.84518 v -16.01 h 21.798 c 3.57,-1.209 7.672,-2.29 12.395,-3.206 21.382,-4.149 67.047,-21.461 116.738,-31.188 35.079,-6.867 72.165,-9.955 104.131,-1.963 5.989,1.497 14.619,18.362 20.082,36.357 h 9.538 v 72.002 c -0.593,-5.489 -1.538,-10.873 -2.813,-16.129 -3.499,2.948 -9.507,8.178 -18.599,5.355 -8.779,-2.724 -12.504,-12.666 -12.024,-15.969 -2.63,1.229 -12.447,1.735 -16.074,-0.588 -4.719,-3.022 -8.281,-12.88 -7.433,-17.435 -3.462,1.91 -9.323,1.511 -14.277,-0.703 -6.024,-2.693 -7.713,-10.812 -8.329,-15.347 -1.347,5.053 -1.817,6.892 -3.21,10.766 -1.432,3.985 -2.914,9.778 -13.296,11.54 -12.941,2.196 -15.654,-5.369 -17.825,-8.561 -1.097,4.477 -2.313,16.878 -10.168,19.797 -12.553,4.665 -19.617,-0.335 -26.009,-6.242 -2.015,6.62 -4.832,15.559 -14.963,17.02 -10.767,1.553 -17.801,-2.56 -22.072,-8.317 -0.005,0.182 -2.81,11.211 -15.68,12.593 -8.726,0.937 -14.594,-3.908 -17.98,-9.231 -0.268,6.574 -6.629,15.053 -12.071,15.888 -7.021,1.076 -16.202,-1.828 -19.861,-8.22 -3.514,5.063 -7.101,8.172 -15.616,7.486 -10.611,-0.855 -11.927,-10.795 -12.314,-11.724 -0.445,0.01 -0.889,0.021 -1.332,0.031 -1.155,4.464 -2.071,9.023 -2.736,13.663 v -35.558 c -3.196,-0.149 -5.131,-0.207 -5.176,-0.129 1.592,-4.103 1.931,-10.015 5.176,-15.978 z m 197.672,-16.01 h 14.547 c -1.585,-0.912 -2.923,-1.533 -5.648,-4.917 -1.095,0.827 -4.185,2.582 -8.899,4.917 z"
                fill="#562e3e"
                fillOpacity={shadowOpacity} />
            <path d="m 124.2493,350.44857 c -0.75848,-10.4665 10.09199,-20.21748 13.72362,-22.40187 -4.65882,-0.6508 -23.96053,-11.48116 -23.27609,-25.47759 0.57441,-11.75589 7.41877,-21.6363 17.33303,-24.09908 -7.59649,-4.25888 -12.87098,-13.56542 -12.87098,-24.35182 0,-14.80353 9.93754,-26.82315 22.17803,-26.82315 3.15877,0 5.63417,-0.0269 9.15367,0.30037 -4.27693,-2.95118 -11.94747,-12.31389 -11.94747,-21.95498 0,-13.62769 9.93753,-24.69127 22.17803,-24.69127 3.02548,0 5.91026,0.67644 8.53905,1.8999 -2.24055,-4.07574 -3.52162,-8.79616 -3.52162,-13.82672 0,-15.38228 11.98238,-27.86955 26.74164,-27.86955 6.30802,0 12.10933,2.28084 16.68457,6.09528 3.5396,-18.54592 13.71939,-27.21509 25.96094,-27.21509 7.12575,0 18.9029,2.22834 22.96086,8.05134 1.85442,-0.45056 4.76037,-23.00505 26.74481,-24.0771 11.95276,-0.58242 23.53739,7.89505 26.94687,19.20038 0.30572,10e-4 6.31437,-17.74005 23.30994,-17.01477 19.52916,0.83395 21.41321,20.88415 22.79689,21.16621 3.55758,-9.07089 22.62762,-12.86212 31.23226,-10.80594 13.71832,3.27719 16.37144,11.97444 16.37144,26.77919 0,0.9011 7.29817,-3.06474 14.30967,-2.98415 12.23944,0.14164 22.17909,11.06357 22.17909,24.69126 0,2.10625 -0.23802,4.15144 -0.68443,6.10383 0.0635,0.0696 0.12694,0.14042 0.18935,0.21124 1.88723,-0.58242 3.87495,-0.89256 5.92614,-0.89256 12.24155,0 22.17909,11.06357 22.17909,24.69126 0,4.73752 -1.20173,9.16613 -3.2836,12.92806 0.41891,-0.0269 0.83994,-0.0403 1.2652,-0.0403 12.2405,0 22.17804,11.06479 22.17804,24.69126 0,9.50434 -4.83337,17.76081 -11.91045,21.88782 0.0233,0.14286 0.0466,0.2845 0.0688,0.42736 11.49788,0.91087 20.43891,11.59837 20.5849,24.62777 0.17878,16.00622 -16.55339,22.77184 -16.55657,23.78772 6.15146,3.68623 9.43082,14.77788 8.50414,23.32495 -1.47572,13.59106 -14.28217,17.51051 -14.79206,18.98304 3.46767,4.15388 5.06821,13.02696 4.31184,19.30783 -1.33502,11.08189 -10.202,19.14056 -19.78833,17.9867 -0.96265,-0.11599 -4.26212,-0.49451 -5.22583,0.71674 1.33079,3.05252 1.43235,9.02204 0.99122,12.68751 -1.20279,9.97809 -9.40015,17.21014 -18.29358,16.13809 -2.60022,-0.3138 -6.62431,-0.96704 -8.65117,-2.45789 -0.22321,0.16361 0.1079,2.03298 0.30043,2.72407 1.78461,6.381 -4.06853,13.60327 -13.06246,16.11855 -8.50413,2.37731 -16.79141,-0.30037 -19.17583,-5.99271 -0.0899,0.0256 -0.17983,0.0513 -0.26975,0.0769 2.06071,3.20637 -0.25071,7.9036 -5.7812,11.13439 -6.22868,3.63861 -14.19543,4.04765 -17.77946,0.91331 -2.07975,-1.81808 -23.3237,-4.87305 -37.25042,-4.98416 65.90573,-4.21859 118.13017,-59.08101 118.13017,-126.04364 v -19.16497 c 0,-10.27236 -1.22924,-20.26022 -3.54807,-29.82317 -3.4994,2.94752 -9.50698,8.1771 -18.59929,5.35535 -8.77918,-2.7253 -12.50391,-12.66676 -12.02364,-15.96959 -2.6309,1.22833 -12.44784,1.73505 -16.07524,-0.58853 -4.71805,-3.022 -8.28093,-12.87921 -7.43252,-17.4348 -3.46238,1.90966 -9.32292,1.51161 -14.27688,-0.7033 -6.02451,-2.69233 -7.71286,-10.81205 -8.32959,-15.34688 -1.34666,5.05254 -1.81635,6.89261 -3.20955,10.76565 -1.43234,3.98538 -2.9144,9.77907 -13.29518,11.54099 -12.94186,2.19537 -15.65421,-5.36879 -17.826,-8.56173 -1.097,4.47745 -2.31354,16.87802 -10.16815,19.79746 -12.55257,4.66426 -19.61696,-0.33578 -26.00961,-6.24302 -2.01416,6.62153 -4.83124,15.55933 -14.96237,17.02087 -10.7669,1.55313 -17.80061,-2.56045 -22.07225,-8.31752 -0.004,0.18193 -2.80967,11.21132 -15.6796,12.5935 -8.72628,0.93652 -14.59423,-3.90845 -17.98044,-9.23083 -0.26764,6.57391 -6.62855,15.05261 -12.07124,15.88778 -7.01996,1.07693 -16.20113,-1.82785 -19.86027,-8.21984 -3.51421,5.06231 -7.10141,8.17222 -15.61613,7.48601 -10.61139,-0.85471 -11.92737,-10.79495 -12.31455,-11.72414 -0.44535,0.011 -0.8886,0.0208 -1.33184,0.0305 -2.62032,10.12706 -4.01352,20.74374 -4.01352,31.68521 v 19.16497 c 0,22.27122 5.60771,43.20544 15.51775,61.38139 5.02589,3.22225 8.76754,8.87675 10.07611,15.61794 21.06834,27.89031 53.46002,46.562 90.74112,49.02722 -13.17353,0.39561 -39.12601,10.13682 -46.29301,9.31997 -7.16595,-0.81564 -12.25743,-6.11482 -14.8915,-10.41644 -0.95419,-1.55923 -2.40557,-4.28452 -2.40557,-4.28452 0,0 -2.07023,2.50917 -4.3531,3.83275 -6.5746,3.81321 -13.8495,5.22348 -22.65513,-0.62638 -7.24422,-4.812 -11.03348,-11.66187 -11.41113,-19.88049 -2.57695,1.39928 -5.44586,2.18073 -8.46817,2.18073 -11.17312,0 -20.24427,-10.67651 -20.24427,-23.82801 0,-4.36755 1.32867,-9.4262 3.07414,-12.94759 -2.99268,1.28206 -6.59787,1.6679 -9.66566,1.6679 -12.2405,0 -21.19423,-11.11241 -22.17804,-24.69249 z"
                fill={color}
                stroke="#000000" />
            <path d="m 134.33442,275.23788 c -4.757,-5.375 -17.964,-12.334 -10.639,-28.905 11.213,-25.368 28.993,-9.966 30.956,-17.249 1.86,-6.9 -21.454,-16.522 -7.337,-36.41 9.087,-12.801 18.719,-2.643 24.441,-7.564 2.739,-2.355 -8.439,-24.362 5.315,-33.866 21.036,-14.535 30.425,2.64 34.711,0.884 4.505,-1.845 -0.792,-20.308 16.89,-26.396 20.334,-7.001 28.186,8.533 31.211,7.38 3.891,-1.484 9.101,-17.9 12.189,-20.257 7.465,-5.7 16.092,-5.891 23.668,-1.936 -5.799,2.294 -11.296,0.983 -17.807,5.808 -5.589,4.142 -11.83,15.992 -18.05,16.385 -3.919,0.247 -15.491,-6.14 -29.136,0.867 -9.751,5.007 -10.964,14.518 -18.965,18.149 -7.178,3.258 -15.991,-3.091 -25.19,2.29 -9.599,5.616 -8.733,22.446 -14.836,30.692 -3.533,4.775 -10.536,4.172 -17.129,14.631 -7.976,12.652 2.238,25.633 0.025,29.343 -4.865,8.158 -12.152,2.314 -18.513,18.422 -4.17,10.559 -0.644,25.594 -1.804,27.732 z"
                fill="#ffffff"
                fillOpacity="0.07" />
            <path d="m 445.68242,349.49281 h 0.915 c -3.829,25.01242 -8.31,50.04249 -20.794,75.28426 -21.962,10.37978 -18.503,-0.64101 -26.208,4.44302 -12.757,8.41948 -24.794,9.54763 -40.154,1.56432 42.081,-26.96684 68.923,-36.40176 86.241,-81.2916 z m -185.552,79.69788 -20.265,12.79682 -19.079,-13.60153 -27.36,1.02818 c -15.239,-21.32314 -18.627,-49.73178 -19.035,-79.92135 h 1.429 c 17.287,44.81045 44.183,62.40217 84.31,79.69788 z"
                fillOpacity="0.2" />
        </g>
    )
}