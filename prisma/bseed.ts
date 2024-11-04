import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    // Hapus semua entri dari tabel yang tergantung
    await prisma.captured_Picture.deleteMany({});
    await prisma.captured_Video.deleteMany({});
    await prisma.gallery_Item.deleteMany({});
    await prisma.detection_Log.deleteMany({});
    await prisma.system_Log.deleteMany({});
    await prisma.identity.deleteMany({});
    await prisma.face.deleteMany({});
    await prisma.user.deleteMany({});
    await prisma.post.deleteMany({});

    // Membuat beberapa entri User
    const user1 = await prisma.user.create({
        data: {
            name: "Alice",
            email: "alice@example.com",
            password: "password123", // Pastikan untuk meng-hash password ini dalam aplikasi nyata
            role: "OWNER",
        },
    });

    const user2 = await prisma.user.create({
        data: {
            name: "Bob",
            email: "bob@example.com",
            password: "password123", // Pastikan untuk meng-hash password ini dalam aplikasi nyata
            role: "RESIDENT",
        },
    });

    // Membuat entri untuk Gallery_Item
    const galleryItem1 = await prisma.gallery_Item.create({
        data: {
            item: 1,
            capture_method: "AUTO",
        },
    });

    const galleryItem2 = await prisma.gallery_Item.create({
        data: {
            item: 2,
            capture_method: "MANUAL",
        },
    });

    // Membuat entri untuk Captured_Picture
    const capturedPicture1 = await prisma.captured_Picture.create({
        data: {
            img_path: "http://example.com/picture1.jpg",
            width: 800,
            height: 600,
            galleryItemId: galleryItem1.id, // Menghubungkan dengan galleryItem1
        },
    });

    const capturedPicture2 = await prisma.captured_Picture.create({
        data: {
            img_path: "http://example.com/picture2.jpg",
            width: 1024,
            height: 768,
            galleryItemId: galleryItem2.id, // Menghubungkan dengan galleryItem2
        },
    });

    // Membuat entri untuk Captured_Video
    const capturedVideo1 = await prisma.captured_Video.create({
        data: {
            video_path: "http://example.com/video1.mp4",
            width: 1280,
            height: 720,
            galleryItemId: galleryItem1.id, // Menghubungkan dengan galleryItem1
        },
    });

    const capturedVideo2 = await prisma.captured_Video.create({
        data: {
            video_path: "http://example.com/video2.mp4",
            width: 1920,
            height: 1080,
            galleryItemId: galleryItem2.id, // Menghubungkan dengan galleryItem2
        },
    });

    // Membuat entri untuk Identity
    const identity1 = await prisma.identity.create({
        data: {
            name: "John Doe",
            createdAt: new Date(),
        },
    });

    // Membuat entri untuk Face
    const face1 = await prisma.face.create({
        data: {
            recognized: true,
            identity: identity1.id, // Menghubungkan dengan identity1
            landmarks: Buffer.from([
                /* data landmarks */
            ]),
            fullPictures: {
                connect: { id: capturedPicture1.id }, // Menghubungkan dengan capturedPicture1
            },
            picture_full: capturedPicture1.id,
            singlePictures: {
                connect: { id: capturedPicture2.id }, // Menghubungkan dengan capturedPicture2
            },
            picture_single: capturedPicture2.id,
            bounding_box: Buffer.from([
                /* data bounding box */
            ]),
        },
    });

    console.log("Data seeded successfully!");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
