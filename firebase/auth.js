import { firebase } from "./Firebase"
const auth = firebase.auth()

const signInWithGoogle = () => {
    const provider = new firebase.auth.GoogleAuthProvider()
    auth.signInWithPopup(provider).then(async (data) => {
        console.log(data)
        return data
    })
}

const logOut = () => {
    console.log('cliecked')
    auth.signOut().then(() => {
        console.log("successful")
    }).catch((error) => {
        console.log(error)
    });
}

export { signInWithGoogle, logOut }