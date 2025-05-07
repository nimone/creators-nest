-- CreateTable
CREATE TABLE "CreatorPref" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "type" TEXT NOT NULL,
    "minDonation" INTEGER NOT NULL,
    "upiAddress" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    CONSTRAINT "CreatorPref_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "CreatorPref_userId_key" ON "CreatorPref"("userId");
