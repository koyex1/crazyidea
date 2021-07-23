export const variants = {

    moveBinAddVariant: {
        initial: { scale: 1 },
        move: {
            scale: 2,
            transition: { duration: 0.5 }

        }

    },
    pathBinAddVariant: {
        initial: {
            pathLength: 0,
        },
        move: {
            pathLength: 1,
            transition: { duration: 0.5 }
        }
    },
    pathBinAddVariantD2: {
        initial: {
            pathLength: 0,
        },
        move: {
            pathLength: 1,
            transition: { duration: 0.5, delay: 0.5 }
        }
    },
    pathBinAddVariantD3: {
        initial: {
            pathLength: 0,
        },
        move: {
            pathLength: 1,
            transition: { delay: 1, duration: 0.5 }
        }
    },

}