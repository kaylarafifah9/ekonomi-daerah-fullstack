-- CreateTable
CREATE TABLE "PDRB" (
    "id" SERIAL NOT NULL,
    "tahun" INTEGER NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "sektor" TEXT NOT NULL,
    "nilai_pdrb" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "PDRB_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Kemiskinan" (
    "id" SERIAL NOT NULL,
    "tahun" INTEGER NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "jumlah_miskin" INTEGER NOT NULL,
    "persentase" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Kemiskinan_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Pengangguran" (
    "id" SERIAL NOT NULL,
    "tahun" INTEGER NOT NULL,
    "kabupaten" TEXT NOT NULL,
    "tingkat_tpt" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "Pengangguran_pkey" PRIMARY KEY ("id")
);
