import "./EnrolList.css";
import { useEffect } from "react";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
// Columns for the detail list.
const columns = [
{
key: "edit",
name: "Edit",
fieldName: "edit",
minWidth: 30,
maxWidth: 200,
isResizable: true,
},
{
key: "fname",
name: "First Name",
fieldName: "fname",
minWidth: 90,
maxWidth: 200,
isResizable: true,
},
{
key: "lname",
name: "Last Name",
fieldName: "lname",
minWidth: 90,
maxWidth: 200,
isResizable: true,
},{
key: "program",
name: "Program",
fieldName: "program",
minWidth: 60,
maxWidth: 200,
isResizable: true,
},
{
key: "email",
name: "Email",
fieldName: "email",
minWidth: 130,
maxWidth: 200,
isResizable: true,
},
{
key: "delete",
name: "Delete",
fieldName: "delete",
minWidth: 50,
maxWidth: 200,
isResizable: true,
},
];
// Test items
let items = [];
const EnrolList = () => {
useEffect(() => {
const curItemKey = props.studentDetails.key;
if (curItemKey) {
items = [...items, props.studentDetails];
props.setStudentDetails({});
}
// Execute deletion on the selected item
if (props.action === "delete") {
// filter the selected item
const deleteItem = items.filter(
(item) => item.key === props.selectedItemId
)[0];
// Remove from the list
items = items.filter((item) => item !== deleteItem);
// update seats
props.restoreSeats(deleteItem.program);
}
}, [props]);
return (
<div className="enrolList">
<DetailsList items={items} columns={columns} />
</div>
);
};
export default EnrolList;