

// all images are hosted on google https://photos.app.goo.gl/hTfLajd9mGdzwqEc6
// assets are being hosted and not sourced locally to avoid pre-loading them

export const TILE_SIZE = 40;

export const FOOD = new Image(TILE_SIZE, TILE_SIZE);
FOOD.src = "https://lh3.googleusercontent.com/pw/ABLVV87DFNzew7YvYnzGYco0ROodctHzXC2Gl6y34wZgrwx_qQ0POVNn5j_lELnKieN2gUMGV0hsjWek6x42-SP11u2vsj0czs_AlYsVWnGXNVQ8ZZ0JLnb6TBmvrpa3cxQecphKOWhqGp1HuZ2sB0dH_R_I";

export const HEAD: Array<HTMLImageElement> = Array(4).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
// from 2 -> 0
HEAD[0].src = "https://lh3.googleusercontent.com/pw/ABLVV85ghjuf5lZot6hv9JhFSC507M3XPchbY7tB4MMVmoM9S4drZ8HpTD47RYluF_RRovBj2xbP-G11PSywYwNzquOqWX_FosEftfvm9ztIbe5sqT7Wy1K3GGBkjmC7z0xrowmA7LZt3szEEO8xCUfRkJBv";
// from 3 -> 1
HEAD[1].src = "https://lh3.googleusercontent.com/pw/ABLVV85hT8Nx_iyIFYGXpc_5M8gfqlPhLJ03AkMVXS1obSOlSQ6DrftQISt31mraIF-pzCuHAeZ1zGK3jhsM59vILozART2FTyfxyVT0ugaT2lE71XT0Al-m20JPDpNMvdmMrvy9l6I4-rUeI_QU2yVW7SF2";
// from 0 -> 2
HEAD[2].src = "https://lh3.googleusercontent.com/pw/ABLVV87_bjxDAGl8KqGwk0KVInMMsbKCe3ttdxuG26CsGBtKG6KdcqSvQ_MFZ7i55lAUNzISBWLW2PNN7DYwoiDt47lWjlMXWkmtpVitEWXBHF_E3HT0-O1M6thPIhV0JbI6grASRLpRPl1fC8-j0O9IvvHL";
// from 1 -> 3
HEAD[3].src = "https://lh3.googleusercontent.com/pw/ABLVV84qMAHXYhyfEsmxiwt0o3gDaX0FOWQVlRcWwjpG7f_b7nBKvyQqSgbVZJGSgJv8GFEJaunEQi28W6IXit5Q_fU-Pdt2wP_h-ICn_UWAo_pR_zSvff6gu68mnUYeqIUUyumcRwcR0aYg0Rp646S72PAx";

export const BODY: Array<HTMLImageElement> = Array(6).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
// 2 - 3 connection
BODY[0].src = "https://lh3.googleusercontent.com/pw/ABLVV87T_JNV8h_iErX9vtRftAB8rH6IFE3d94gqtHJcKwwUY5YK_V6n0rUOe7ZKiUKWRE_IrZRsvM4wMjY8KBrAVZHVOtjVjS3pOGCNXtulgNZeelMog3ZEURdkbCsRXQ97KGOsHoqZMYwxp1a4ME6XBaQ2";
// 0 - 2 connection
BODY[1].src = "https://lh3.googleusercontent.com/pw/ABLVV85Wmsf5l8hSptWai0eFFYI0wkwWraITDAho__iY8iyATRDXIeal4mOWJNzH52r8onuz-drvldjS7A3njT6eXi0YArlsB_vPKtUzgDJCii2xXDf9LEjdVMtnzCJrR7ucHfOVltjVoaSPdq9PyyvKO68r";
// 1 - 2 connection
BODY[2].src = "https://lh3.googleusercontent.com/pw/ABLVV84o_fpzOAVcJUaWiyx2Sy1miEaNoQ_d-vO9t5pB1nPyPVMadQQ66rMXAgxNj4cW1YzQWLztayZt2jJmJUK9mRuMjV8IB3zdO9MKYj9twHs9Bhxp7HOg97bkKPGl7g1FRKIJAT1CzHHcY4jqLFRJYk-5";
// 0 - 3 connection
BODY[3].src = "https://lh3.googleusercontent.com/pw/ABLVV87Seib14Y9_lZXM_xCzCmh5gXxDxneVuYmFjsP-2VvuooeIs0o8HbYKnFDQFPEYEEtxS8amuCacjMgC72ibYGPov54Vdpypb-_8_wimgeDM8hvuzEvmRWsfe7AxChl4xDcsSvQBXYgkVW4Vmlt59W3t";
// 1 - 3 connection
BODY[4].src = "https://lh3.googleusercontent.com/pw/ABLVV84z5YBTtciVElqlECNEWHi3bFO4O7np4XYB4xu0X4rtpWb9CggI24X-UU4hXfd0f0Inj-1EK0s_REnmrpUmjMlZsqgKGDUhQI8bWtOndDMRbNzdRQOwdOQA2r4lbc48XTK1VO6eRg4PADDUgUBOSMFR";
// 0 - 1 connection
BODY[5].src = "https://lh3.googleusercontent.com/pw/ABLVV87vjBRpWZftQOidnNrkrfsA9M9l-owpk3LMmALU5UmKf8GUbY-L18JjkDapFEer8d25x79a52Mga1q-IVAGpqv164NZqIbrrSk5pp-koer7112QLfgaMkUsDF2KiEBlPVJ8OBaJhZ9ns7kVKURK6Hru";

export const TAIL: Array<HTMLImageElement> = Array(4).fill(undefined).map(_ => new Image(TILE_SIZE, TILE_SIZE));
// from 2 -> 0
TAIL[0].src = "https://lh3.googleusercontent.com/pw/ABLVV87pnIWZuLVxu8oc3YTLmUKDZvmy-ylMTVXfLQfWfnUjC9UhXyS5wki5y8cgRxuACqVwi2G1AZHd4L-yadGd-KrfO12NSGJUasVVX2y2MnYLdYlK89Y_k1iNq4xBJNdssV017vJaVsK8lfIpGlSl5_mR";
// from 3 -> 1
TAIL[1].src = "https://lh3.googleusercontent.com/pw/ABLVV87IJcniW-KDW6CvOaDXm_C2ydmBWvKwi2kyi5fiH8ARiTjO6TnKFmSKfCd0-AJznwuUoV1HPpi4w-2A9RoJT-LhgfoHiG-c6gTrKc-um3NEsHxB-kI9FNMftIsVk4UnhAMKkLIF4_N9__ZxMGmQT-An";
// from 0 -> 2
TAIL[2].src = "https://lh3.googleusercontent.com/pw/ABLVV85J75cb5A-JzLCyvwWRUbGu488ClRd60AWXg-xUIHMbzE00a4aZnCs3j9TNRV6CV_y2ujlhdIDOzjhW6cqrPaUv8iFurPkU_70F4jIl7v-uMh3RUQQrXwfUDK9NPgZqcTNMGjVIR1FQJ8k-6KpeMSKs";
// from 1 -> 3
TAIL[3].src = "https://lh3.googleusercontent.com/pw/ABLVV84f52AYL4NMSVn82b_TkcaXxc1gBsnEXBddkjb7mcLmRVYrw5Y0jPTNGjkXVayysGkJZVhS_6Rmy_VP_Lmw_-tVQ7UHfM72vnzY0mpwfrBxhTK3uzp8WF-5Pu5hHV7-3NUk8LQeELF6JpdQVjUGk__D";


export interface IPos {
    x: number,
    y: number
}

export interface IDir {
    dx: number,
    dy: number,
    _state: number
}

export interface SnakeSegment {
    x: number,
    y: number,
    dir: number
};

export const Dir = {
    Up: { dx: 0, dy: -1, _state: 0 } as IDir,
    Left: { dx: -1, dy: 0, _state: 1 } as IDir,
    Down: { dx: 0, dy: 1, _state: 2 } as IDir,
    Right: { dx: 1, dy: 0, _state: 3 } as IDir,
}
