//Initial State
const INITIAL_STATE = {
    visable: false,
    imageSrc: null 
}

// Action Prefix
const _PREFIX = 'photoViewer/'

// Actions
const OPEN_PHOTO_VIEWER = `${_PREFIX}openPhotoViewer`
const CLOSE_PHOTO_VIEWER = `${_PREFIX}closePhotoViewer`

// Reducer
export default function photoViewerReducer(state = INITIAL_STATE, action = {}) {
    const { imageSrc } = action

    switch (action.type) {
        case OPEN_PHOTO_VIEWER:
            return {
                ...state,
                visable: true,
                imageSrc
            }
        case CLOSE_PHOTO_VIEWER:
            return {
                ...state,
                visable: false,
                imageSrc: null
            }
        default:
            return state
    }
}

// Sync Action Creators
export function openPhotoViewer(imageSrc) {
    return {
        type: OPEN_PHOTO_VIEWER,
        imageSrc
    }
}

export function closePhotoViewer() {
    return {
        type: CLOSE_PHOTO_VIEWER
    }
}