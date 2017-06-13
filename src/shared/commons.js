export const getTimeRange = (timeRangeType) => {
    switch (timeRangeType) {
        case 1: return "昨日"
        case 2: return "過去７日間"
        case 3: return "過去30日間"
        default : return ""
    }
}