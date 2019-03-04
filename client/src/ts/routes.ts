export const routes = {
    index: '/',
    building: {
        index: '/building/:id',
        floorplan: '/building/:id/floorplan/:fid',
        suggestions: '/building/:id/floorplan/:fid/suggestions',
        availability: '/building/:id/floorplan/:fid/suggestions/:sid/availability',
    },
}
