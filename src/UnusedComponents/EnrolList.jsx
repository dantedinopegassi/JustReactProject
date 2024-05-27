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
  },
  {
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
const EnrolList = (props) => {
  useEffect(() => {
    //DELETEO
    if (props.action === "delete") {
      const deleteItem = items.filter(
        (item) => item.key === props.selectedItemId
      )[0];
      props.restoreSeats(deleteItem.program);
      items = items.filter((item) => item !== deleteItem);
    }
    const curItemKey = props.studentDetails.key;
    if (curItemKey) {
      //UPDATEO
      const i = items.findIndex((item) => item.key === curItemKey);
      if (i > -1) {
        items = items.map((item) =>
          item.key === curItemKey ? props.studentDetails : item
        );
      }
      //CREATEO
      else {
        items = [...items, props.studentDetails];
      }
    }
    
    //RESETEO
    props.setStudentDetails({});
  }, [props]);

  return (
    <div className="enrolList">
      <DetailsList items={items} columns={columns} />
    </div>
  );
};

export default EnrolList;
