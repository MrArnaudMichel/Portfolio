export class ComponentPreviews {
    static get ComponentPreviews() {
        return {
            "src/components/mainPage/Career.js": {
                "componentName": "Career",
                "props": {
                    "t": "t"
                }
            },
            "src/components/mainPage/ImagesSlider.js": {
                "componentName": "ImageSlider",
                "props": {
                    "images": "images"
                }
            },
            "src/App.js": {
                "componentName": "App",
                "props": {
                    "t": "t"
                }
            },
            "src/index.js": {
                "componentName": "DevSupport",
                "props": {
                    "ComponentPreviews": "ComponentPreviews",
                    "useInitialHook": "useInitial"
                }
            }
        };
    }
}

export function useInitial() {
    return {
        ComponentPreviews: ComponentPreviews,
        useInitial: useInitial
    };
}