import { BarChart, Bar, Label, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
const testUser = require('../jsonTestFiles/testUser.json');


function calcQuarterTotals(user) {
    const { coursesTaken } = user;
    var totalCounts = {};
    for (var key in coursesTaken) {
        var { units, taken } = coursesTaken[key];
        var courseType = key.split(" ")[0];
        if (totalCounts[taken] != null) {
            totalCounts[taken][courseType] = (totalCounts[taken][courseType] || 0) + units;
        }
        else {
            totalCounts[taken] = {};
            totalCounts[taken][courseType] = (totalCounts[taken][courseType] || 0) + units;
        }
    }
    var output = [];
    for (var key2 in totalCounts) {
        var subDict = totalCounts[key2];
        subDict["name"] = key2;
        output.push(subDict)
    }
    return output;
}

console.log(calcQuarterTotals(testUser));

function courseTypes(user) {
    const { coursesTaken } = user;
    var courseTypes = new Set();

    for (var key in coursesTaken) {
        var courseType = key.split(" ")[0];
        courseTypes.add(courseType);
    }
    return courseTypes;
}

console.log("Course Types", courseTypes(testUser));



const data = calcQuarterTotals(testUser);

export default function BarGraph() {
    var courseT = courseTypes(testUser);
    var courseArr = [];
    courseT.forEach(v => courseArr.push(v));
    // console.log(courseArr);

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', "#ff0090", "#9a00c4", "#29ffb4", "#42ff7b", "#fa3c85", "#006fff", "#00c4b4", "#ffd129", "#ff9442", "#3c6bfa"];
    return (
        <div className="w-full md:w-2/3 xl:w-3/5 px-4 ">
            <div className="relative flex flex-col min-w-128 break-words bg-white mb-6 shadow-lg border border-gray-400 rounded-lg hover:shadow-lg hover:border-opacity-0 transform hover:-translate-y-1 transition-all duration-200">
                <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart
                            width={500}
                            height={300}
                            data={data}
                            margin={{
                                top: 20,
                                right: 30,
                                left: 0,
                                bottom: 5,
                            }}
                        >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="name" />
                            <YAxis>
                                <Label
                                    style={{
                                        textAnchor: "middle",
                                        fontSize: "130%",
                                    }}
                                    angle={270}
                                    value={"Units"} />
                            </YAxis>
                            <Tooltip />
                            {/* <Legend /> */}
                            {courseArr.map((entry, index) => (<Bar dataKey={entry} stackId="a" fill={COLORS[index % COLORS.length]} />))}
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}
