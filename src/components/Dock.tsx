const Dock = ({ createNewNote }: { createNewNote: () => unknown }) => {
  return (
    <>
      <div className="font-bold text-3xl" onClick={createNewNote}>
        create new +
      </div>
    </>
  );
};

export default Dock;
