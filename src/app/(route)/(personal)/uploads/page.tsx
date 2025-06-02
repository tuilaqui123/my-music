"use client";

export default function UploadsPage() {
  return (
    <div>
      <h3 className="text-3xl mb-5 font-black">Uploads</h3>
      <div>
        <form
          onSubmit={async (e) => {
            e.preventDefault();
            const link = (e.target as any).upload_link.value;

            console.log("Submitted:", link);

            try {
              const res = await fetch("http://localhost:3001/api/upload", {
                method: "POST",
                headers: {
                  "Content-Type": "application/json",
                },
                body: JSON.stringify({ link }),
              });

              if (!res.ok) throw new Error("Server error");

              const data = await res.json();
              console.log("Response:", data);
              alert("Uploaded successfully!");
            } catch (err) {
              console.error("Upload failed", err);
              alert("Upload failed");
            }
          }}>
          <input
            type="text"
            placeholder="Link"
            id="upload_link"
            name="upload_link"
            className="border border-white focus:border-white focus:ring-0 bg-black text-white placeholder-white px-3 py-2 rounded"
          />
          <button
            type="submit"
            className="ml-2 px-4 py-2 bg-blue-600 text-white rounded">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
