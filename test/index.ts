import * as moment from 'moment'
import 'twix'

// import * as twix from 'twix'
// require('twix');
var itr = moment().startOf("isoWeek").twix(moment().subtract(-1, "weeks").startOf("week")).iterate("days");

// const from_date = today.startOf('week');
// const to_date = today.endOf('week');
// var itr = moment.twix(moment('2012-01-15'),moment('2012-01-20')).iterate("days");
// var itr = moment().subtract(1, "year").startOf("year").twix(moment().subtract(1, "year").endOf("year")).iterate("months");
var range=[];
while(itr.hasNext()){
    range.push(itr.next().format("yyy-MM-DD"))
}

console.log(range)


// const db_result = [
//     { "value": 1, "t": "2022-08-23T00:00:00.000Z" },
//     { "value": 1, "t": "2022-08-23T16:00:00.000Z" },
//     { "value": 1, "t": "2022-08-23T18:00:00.000Z" },
//     { "value": 2, "t": "2022-08-23T19:00:00.000Z" },
//     { "value": 1, "t": "2022-08-24T06:00:00.000Z" },
//     { "value": 1, "t": "2022-08-25T03:00:00.000Z" },
//     { "value": 1, "t": "2022-08-27T22:00:00.000Z" },
//     { "value": 1, "t": "2022-08-28T02:00:00.000Z" },
//     { "value": 1, "t": "2022-08-28T12:00:00.000Z" },
//     { "value": 1, "t": "2022-08-28T22:00:00.000Z" },
//     { "value": 1, "t": "2022-08-29T12:00:00.000Z" },
//     { "value": 1, "t": "2022-08-29T17:00:00.000Z" },
//     { "value": 1, "t": "2022-08-29T18:00:00.000Z" },
//     { "value": 1, "t": "2022-08-30T01:00:00.000Z" },
//     { "value": 1, "t": "2022-08-30T04:00:00.000Z" },
//     { "value": 1, "t": "2022-08-30T06:00:00.000Z" },
//     { "value": 1, "t": "2022-08-30T08:00:00.000Z" },
//     { "value": 1, "t": "2022-08-30T10:00:00.000Z" },
//     { "value": 1, "t": "2022-08-30T20:00:00.000Z" },
//     { "value": 1, "t": "2022-08-31T10:00:00.000Z" },
//     { "value": 1, "t": "2022-08-31T11:00:00.000Z" },
//     { "value": 1, "t": "2022-08-31T12:00:00.000Z" },
//     { "value": 2, "t": "2022-08-31T14:00:00.000Z" },
//     { "value": 2, "t": "2022-09-01T00:00:00.000Z" },
//     { "value": 1, "t": "2022-09-01T01:00:00.000Z" },
//     { "value": 1, "t": "2022-09-01T02:00:00.000Z" },
//     { "value": 4, "t": "2022-09-01T08:00:00.000Z" },
//     { "value": 1, "t": "2022-09-01T10:00:00.000Z" },
//     { "value": 1, "t": "2022-09-01T11:00:00.000Z" },
//     { "value": 1, "t": "2022-09-01T15:00:00.000Z" },
//     { "value": 1, "t": "2022-09-01T18:00:00.000Z" },
//     { "value": 1, "t": "2022-09-01T20:00:00.000Z" },
//     { "value": 1, "t": "2022-09-02T10:00:00.000Z" },
//     { "value": 1, "t": "2022-09-02T12:00:00.000Z" },
//     { "value": 1, "t": "2022-09-02T13:00:00.000Z" },
//     { "value": 1, "t": "2022-09-02T14:00:00.000Z" },
//     { "value": 2, "t": "2022-09-02T16:00:00.000Z" },
//     { "value": 2, "t": "2022-09-02T17:00:00.000Z" },
//     { "value": 1, "t": "2022-09-02T18:00:00.000Z" },
//     { "value": 1, "t": "2022-09-02T19:00:00.000Z" },
//     { "value": 1, "t": "2022-09-02T23:00:00.000Z" },
//     { "value": 1, "t": "2022-09-03T01:00:00.000Z" },
//     { "value": 1, "t": "2022-09-03T02:00:00.000Z" },
//     { "value": 3, "t": "2022-09-03T03:00:00.000Z" },
//     { "value": 1, "t": "2022-09-03T04:00:00.000Z" },
//     { "value": 3, "t": "2022-09-03T05:00:00.000Z" },
//     { "value": 1, "t": "2022-09-03T08:00:00.000Z" },
//     { "value": 1, "t": "2022-09-03T11:00:00.000Z" },
//     { "value": 1, "t": "2022-09-04T02:00:00.000Z" },
//     { "value": 1, "t": "2022-09-06T11:00:00.000Z" },
//     { "value": 3, "t": "2022-09-06T12:00:00.000Z" },
//     { "value": 1, "t": "2022-09-06T17:00:00.000Z" },
//     { "value": 1, "t": "2022-09-07T19:00:00.000Z" },
//     { "value": 1, "t": "2022-09-07T20:00:00.000Z" },
//     { "value": 1, "t": "2022-09-08T01:00:00.000Z" },
//     { "value": 1, "t": "2022-09-08T06:00:00.000Z" },
//     { "value": 1, "t": "2022-09-08T07:00:00.000Z" },
//     { "value": 1, "t": "2022-09-08T08:00:00.000Z" },
//     { "value": 1, "t": "2022-09-08T10:00:00.000Z" },
//     { "value": 2, "t": "2022-09-08T11:00:00.000Z" },
//     { "value": 2, "t": "2022-09-08T12:00:00.000Z" },
//     { "value": 1, "t": "2022-09-08T13:00:00.000Z" },
//     { "value": 2, "t": "2022-09-08T14:00:00.000Z" },
//     { "value": 1, "t": "2022-09-08T20:00:00.000Z" },
//     { "value": 1, "t": "2022-09-09T00:00:00.000Z" },
//     { "value": 2, "t": "2022-09-09T12:00:00.000Z" },
//     { "value": 1, "t": "2022-09-10T12:00:00.000Z" },
//     { "value": 1, "t": "2022-09-10T17:00:00.000Z" },
//     { "value": 1, "t": "2022-09-13T12:00:00.000Z" },
//     { "value": 1, "t": "2022-09-20T07:00:00.000Z" },
//     { "value": 1, "t": "2022-09-20T12:00:00.000Z" }
//   ]


//   const week0 = [];
//   const week1 = [];
//   const week2 = [];
//   const week3 = [];
//   const week4 = [];
//   const week5 = [];


// //   console.log(db_result.length)
//   db_result.map(e=>{
//     // switch (moment(e.t).day()) {
//     switch (moment(e.t).hours()) {
//         // case 0:
//         case 2:
//         case 3:
//         case 4:
//         case 5:
//             week0.push(e)
//             break;
//         // case 1:
//         case 6:
//         case 7:
//         case 8:
//         case 9:
//             week1.push(e)
//             break;
//         // case 2:
//         case 10:
//         case 11:
//         case 12:
//         case 13:
//             week2.push(e)
//             break;
//         // case 3:
//         case 14:
//         case 15:
//         case 16:
//         case 17:
//             week3.push(e)
//             break;
//         // case 4:
//         case 18:
//         case 19:
//         case 20:
//         case 21:
//             week4.push(e)
//             break;
//         // case 5:
//         case 22:
//         case 23:
//         case 0:
//         case 1:
//             week5.push(e)
//             break;
//         // case 6:
//             // week6.push(e)
//             // break;
//         default:
//             break;
//     }
//     // console.log(moment(e.t).day())
//   })


// //   console.log(week0.length)
// //   console.log(week1.length)
// //   console.log(week2.length)
// //   console.log(week3.length)
// //   console.log(week4.length)
// //   console.log(week5.length)

// function weekCa(params:any) :any{
//     const week_0 = [];
//     const week_1 = [];
//     const week_2 = [];
//     const week_3 = [];
//     const week_4 = [];
//     const week_5 = [];
//     const week_6 = [];
//     params.forEach(i => {
//         switch (moment(i.t).day()) {
//             case 0:
//                 week_0.push(i)
//                 break;
//             case 1:
//                 week_1.push(i)
//                 break;
//             case 2:
//                 week_2.push(i)
//                 break;
//             case 3:
//                 week_3.push(i)
//                 break;
//             case 4:
//                 week_4.push(i)
//                 break;
//             case 5:
//                 week_5.push(i)
//                 break;
//             case 6:
//                 week_6.push(i)
//                 break;
//             default:
//                 break;
//         }
//     });
//     const result = [week_0.length,week_1.length,week_2.length,week_3.length,week_4.length,week_5.length,week_6.length,]
//     return result
// }


// // console.log(weekCa(week0))
// // console.log(weekCa(week1))
// // console.log(weekCa(week2))
// // console.log(weekCa(week3))
// // console.log(weekCa(week4))
// // console.log(weekCa(week5))
// const final_result = [
//     {
//       name: "02 - 06",
//       data: weekCa(week0)
//     },
//     {
//       name: "06 - 10",
//       data: weekCa(week1)
//     },
//     {
//       name: "10 - 14",
//       data: weekCa(week2)
//     },
//     {
//       name: "14 - 18",
//       data: weekCa(week3)
//     },
//     {
//       name: "18 - 22",
//       data: weekCa(week4)
//     },
//     {
//       name: "22 - 02",
//       data: weekCa(week5)
//     }
//   ]

//   console.log(final_result)
// //   console.log(week6.length)
// //   [
// //     {
// //       name: "02 - 06",
// //       data: [8, 4, 1, 6, 6, 1, 10]
// //     },
// //     {
// //       name: "06 - 10",
// //       data: [9, 1, 1, 1, 11, 3, 10]
// //     },
// //     {
// //       name: "10 - 14",
// //       data: [3, 1, 2, 4, 11, 14, 10]
// //     },
// //     {
// //       name: "14 - 18",
// //       data: [0, 1, 1, 1, 3, 12, 9]
// //     },
// //     {
// //       name: "18 - 22",
// //       data: [0, 1, 4, 1, 2, 14, 40]
// //     },
// //     {
// //       name: "22 - 02",
// //       data: [0, 1, 1, 1, 6, 13, 18]
// //     }
// //   ]