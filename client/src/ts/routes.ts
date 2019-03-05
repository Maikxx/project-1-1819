export const routes = {
    index: '/',
    building: {
        overview: '/building/:id',
        suggestions: '/building/:id/floorplan/:fid/suggestions',
        availability: '/building/:id/floorplan/:fid/suggestions/:sid/availability',
    },
}
