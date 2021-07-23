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
            transition: { duration: 2 }
        }
    }

}