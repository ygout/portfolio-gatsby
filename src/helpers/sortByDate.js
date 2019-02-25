const month = ["Janvier",
    "Fevrier",
    "Mars",
    "Avril",
    "Mai",
    "Juin",
    "Juillet",
    "Aout",
    "Septembre",
    "Octobre",
    "Novembre",
    "Decembre"];

function sortBydate(sortArray) {
    return sortArray.sort((a, b) => {
        let startDateA = a.node.childMarkdownRemark.frontmatter.startDate;
        let startDateB = b.node.childMarkdownRemark.frontmatter.startDate;

        let monthA = month.indexOf(startDateA.substring(0, startDateA.indexOf(' ')));
        let monthB = month.indexOf(startDateB.substring(0, startDateB.indexOf(' ')));

        let yearA = startDateA.substring(startDateA.indexOf(' '));
        let yearB = startDateB.substring(startDateB.indexOf(' '));

        a = new Date(yearA, monthA);
        b = new Date(yearB, monthB);
        return b - a;
    })

}

export default sortBydate;