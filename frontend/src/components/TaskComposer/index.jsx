import React, { useState, useRef, useEffect } from "react";
import styles from "./index.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { createTask } from "../../store/actions/TaskActions";

export default function TaskComposer({ columnId }) {
  const dispatch = useDispatch();

  const [open, setOpen] = useState(false);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [tag, setTag] = useState(1);
  const [otherTag, setOtherTag] = useState("");
  const textareaRef = useRef();

  const tagsData = useSelector(({ TagsData }) => TagsData.data);

  useEffect(() => {
    if (open) textareaRef.current.focus();
  }, [open]);

  const handleAdd = () => {
    if (!title.trim()) return;
    dispatch(createTask({ 
      title, 
      description,
      tag_id: tag,
      otherTag,
      column_id: columnId
    }));

    setTitle("");
    setDescription("");
    setTag("");
    setOtherTag("");
    setOpen(false);
  };

  return open ? (
    <div className={styles.composer}>
      <input
        ref={textareaRef}
        className={styles.input}
        placeholder="Enter a title..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleAdd();
          }
        }}
      />
      <textarea
        ref={textareaRef}
        className={styles.input}
        placeholder="Enter a description..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter" && !e.shiftKey) {
            e.preventDefault();
            handleAdd();
          }
        }}
      />
      <select onChange={(e) => setTag(e.target.value)} value={tag}>
        {tagsData?.map((tag) => (
          <option key={tag?.id} value={tag?.id}>
            {tag?.name}
          </option>
        ))}
        <option value="other">Other</option>
      </select>
      {tag === "other" && (
        <input
          type="text"
          placeholder="Enter a tag..."
          onChange={(e) => setOtherTag(e.target.value)}
          value={otherTag}
        />
      )}
      <div className={styles.actions}>
        <button className={styles.addBtn} onClick={handleAdd}>
          Add card
        </button>
        <button className={styles.cancelBtn} onClick={() => setOpen(false)}>
          ✕
        </button>
      </div>
    </div>
  ) : (
    <div className={styles.closed} onClick={() => setOpen(true)}>
      + Add a card
    </div>
  );
}
