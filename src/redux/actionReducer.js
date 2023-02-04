import videoone from "../videos/videoone.mp4"
import videotwo from "../videos/videotwo.mp4"
import videothree from "../videos/videothree.mp4"

const intitalState={

    video:[
        videoone,videotwo,videothree
    ], 
    currentvideo:videoone
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








