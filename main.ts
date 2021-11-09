controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . 1 1 f f f f f 1 . . . . 
        . . . . f f f 1 1 1 f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . f f f f f 1 1 1 . . . . 
        . . . . f 1 1 1 f f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . f f f 1 1 1 f f . . . . 
        . . . . 1 1 f f f f f 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . f 1 1 1 f f f f . . . . 
        . . . . f f f f f 1 1 1 . . . . 
        `],
    50,
    true
    )
})
controller.right.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . c f . . . . . . . 
        . . . . . . . f c . . . . . . . 
        . . . . f f f . . f f f . . . . 
        `)
})
controller.left.onEvent(ControllerButtonEvent.Released, function () {
    animation.stopAnimation(animation.AnimationTypes.All, mySprite)
    mySprite.setImage(img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . f 1 f f 1 f f 1 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f c . . . . . . . 
        . . . . . . . c f . . . . . . . 
        . . . . f f f . . f f f . . . . 
        `)
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    mySprite,
    [img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . 1 f f f f f 1 1 . . . . 
        . . . . f f 1 1 1 f f f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . 1 1 1 f f f f f . . . . 
        . . . . f f f f 1 1 1 f . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . f f 1 1 1 f f f . . . . 
        . . . . 1 f f f f f 1 1 . . . . 
        `,img`
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . . . . . . . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f 1 1 f 1 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . f 1 1 f f 1 f f 1 f . . . 
        . . . . f 1 1 1 1 1 1 f . . . . 
        . . . . . f 1 1 1 1 f . . . . . 
        . . . . . . f f f f . . . . . . 
        . . . . . . . f f . . . . . . . 
        . . . . f f f f 1 1 1 f . . . . 
        . . . . 1 1 1 f f f f f . . . . 
        `],
    50,
    true
    )
})
let mySprite: Sprite = null
scene.setBackgroundColor(9)
mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . f 1 1 1 1 f . . . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . . f 1 1 f f 1 f f 1 f . . . 
    . . . f 1 1 f 1 1 f 1 1 f . . . 
    . . . f 1 1 f f 1 f f 1 f . . . 
    . . . f 1 1 f f 1 f f 1 f . . . 
    . . . . f 1 1 1 1 1 1 f . . . . 
    . . . . . f 1 1 1 1 f . . . . . 
    . . . . . . f f f f . . . . . . 
    . . . . . . . c f . . . . . . . 
    . . . . . . . f c . . . . . . . 
    . . . . f f f . . f f f . . . . 
    `, SpriteKind.Player)
tiles.setTilemap(tilemap`level2`)
controller.moveSprite(mySprite)
scene.cameraFollowSprite(mySprite)
