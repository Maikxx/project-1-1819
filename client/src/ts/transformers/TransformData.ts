function getAuthorFromResult(result: any): string | undefined {
    return result.authors
        && result.authors['main-author']
        && result.authors['main-author']._attributes
        && result.authors['main-author']._attributes['search-term']
        || undefined
}

function getImageFromResult(result: any): string | undefined {
    return result.coverimages
        && result.coverimages.coverimage
        && result.coverimages.coverimage[1]
        && result.coverimages.coverimage[1]._text
        || undefined
}

function getSeriesFromResult(result: any): string | undefined {
    return result.series
        && result.series['series-title']
        && result.series['series-title']._text
        || undefined
}

function getTitleFromResult(result: any): string | undefined {
    return result.titles
        && result.titles['short-title']
        && result.titles['short-title']._text
        || undefined
}

function getFormatFromResult(result: any): string | undefined {
    return result.formats
        && result.formats.format
        && result.formats.format._text
        || undefined
}

function getSubjectFromResult(result: any): string | undefined {
    return result.subjects
        && result.subjects['topical-subject']
        && result.subjects['topical-subject']._text
        || undefined
}

function getTargetAudienceFromResult(result: any): string | undefined {
    return result['target-audiences']
        && result['target-audiences']['target-audience']
        && result['target-audiences']['target-audience']._text
        || undefined
}

function getSummaryFromResult(result: any): string | undefined {
    return result.summaries
        && result.summaries.summary
        && result.summaries.summary._text
        || undefined
}

function getFrablFromResult(result: any): string | undefined {
    return result.frabl
        && result.frabl._text
        || undefined
}

export function getTransformedResultFromResults(results: any[]) {
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
            frabl: getFrablFromResult(result),
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

export function translateSuggestionKey(key: string, value: string): string | undefined {
    return translations[key][value]
}
