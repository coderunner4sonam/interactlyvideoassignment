// import videoone from "../videos/videoone.mp4"
// import videotwo from "../videos/videotwo.mp4"
// import videothree from "../videos/videothree.mp4"

const intitalState={

    video:[
        "https://www.youtube.com/watch?v=oUFJJNQGwhk","https://www.youtube.com/watch?v=jNgP6d9HraI","https://www.youtube.com/watch?v=ysz5S6PUM-U"
    ], 
    currentvideo:"https://www.youtube.com/watch?v=oUFJJNQGwhk"
}

export default function actionReducer(state=intitalState,action){
    switch (action.type) {
        case "CHANGEVIDEO":
            return {
                ...state,
                currentvideo:state.video[action.value]
            };
        
        default:
            return{
                state
            } 
    }
}








