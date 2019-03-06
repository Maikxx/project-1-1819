const getAuthorFromResult = (result: any) => {
    return result.authors
        && result.authors['main-author']
        && result.authors['main-author']._attributes
        && result.authors['main-author']._attributes['search-term']
        || undefined
}

const getImageFromResult = (result: any) => {
    return result.coverimages
        && result.coverimages.coverimage
        && result.coverimages.coverimage[1]
        && result.coverimages.coverimage[1]._text
        || undefined
}

const getSeriesFromResult = (result: any) => {
    return result.series
        && result.series['series-title']
        && result.series['series-title']._text
        || undefined
}

const getTitleFromResult = (result: any) => {
    return result.titles
        && result.titles['short-title']
        && result.titles['short-title']._text
        || undefined
}

const getFormatFromResult = (result: any) => {
    return result.formats
        && result.formats.format
        && result.formats.format._text
        || undefined
}

const getSubjectFromResult = (result: any) => {
    return result.subjects
        && result.subjects['topical-subject']
        && result.subjects['topical-subject']._text
        || undefined
}

const getTargetAudienceFromResult = (result: any) => {
    return result['target-audiences']
        && result['target-audiences']['target-audience']
        && result['target-audiences']['target-audience']._text
        || undefined
}

const getSummaryFromResult = (result: any) => {
    return result.summaries
        && result.summaries.summary
        && result.summaries.summary._text
        || undefined
}

export const getTransformedResultFromResults = (results: any[]) => {
    return results
        ? results.map(result => ({
            author: getAuthorFromResult(result),
            image: getImageFromResult(result),
            series: getSeriesFromResult(result),
            title: getTitleFromResult(result),
            format: getFormatFromResult(result),
            subject: getSubjectFromResult(result),
            targetAudience: getTargetAudienceFromResult(result),
            summary: getSummaryFromResult(result),
        }))
        : []
}

const translations = {
    type: {
        Activiteiten: 'Activiteiten',
        Audiovisual: 'Audiovisueel',
        sheetmusic: 'Bladmuziek',
        book: 'Boek',
        bookwithcassette: 'Boek met cassette',
        bookwithcd: 'Boek met cd',
        cassette: 'Cassette',
        cd: 'CD',
        cdrom: 'CD-ROM',
        computerfile: 'Computer bestand',
        Cursus: 'Cursus',
        daisyrom: 'Daisy-rom',
        dvdvideo: 'DVD',
        ebook: 'EBook',
        movie: 'Film',
        photo: 'Foto',
        largetype: 'Tekst',
        kit: 'Kit',
        audiobook: 'Audioboek',
        website: 'Website',
        schooltv: 'Schooltv',
        magazine: 'Magazine',
        excerpt: 'Uittreksel',
        video: 'Video',
    },
    targetAudience: {
        ageYouth: 'Jeugd',
        ageAdults: 'Volwassenen',
        ageYoungAdults: 'Jongvolwassenen',
    },
}

export function translateSuggestionKey(key: string, value: string) {
    return translations[key][value]
}
