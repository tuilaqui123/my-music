import Form from "next/form";

export default function UploadsPage() {
  return (
    <div>
      <h3 className="text-3xl mb-5 font-black">Uploads</h3>
      <div>
        <Form action="/">
          <input
            type="text"
            placeholder="Link"
            id="upload_link"
            className="border border-white focus:border-white focus:ring-0 bg-black text-white placeholder-white px-3 py-2 rounded"
          />
          <button type="submit">Submit</button>
        </Form>
      </div>
    </div>
  );
}
