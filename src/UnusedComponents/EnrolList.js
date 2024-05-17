import "./EnrolList.css";
import { DetailsList } from "@fluentui/react/lib/DetailsList";
import { useEffect } from "react";

const columns = [
  {
    key: "edit",
    name: "Edit",
    fieldName: "edit",
    minWidth: 40,
    maxWidth: 40,
    isRezisable: true,
  },
  {
    key: "fname",
    name: "First Name",
    fieldName: "fname",
    minWidth: 90,
    maxWidth: 200,
    isRezisable: true,
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
    minWidth: 40,
    maxWidth: 40,
    isRezisable: true,
  },
];

let items = [];

const EnrolList = (props) => {
  useEffect(() => {
    const curItemKey = props.persona.key;
    if (curItemKey) {
      items = [...items, props.persona];
      props.setPersona({});
    }
  }, [props]);

  return (
    <>
      <div className="enrolList">
        <DetailsList items={items} columns={columns} />
      </div>
      <div>
        <button onClick={() => alert(JSON.stringify(items))}>lista</button>
      </div>
    </>
  );
};
export default EnrolList;
