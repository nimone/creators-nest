/*
  Warnings:

  - Added the required column `name` to the `Donation` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Donation" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "amount" INTEGER NOT NULL,
    "recurring" BOOLEAN NOT NULL DEFAULT false,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "message" TEXT,
    "creatorId" TEXT NOT NULL,
    CONSTRAINT "Donation_creatorId_fkey" FOREIGN KEY ("creatorId") REFERENCES "user" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Donation" ("amount", "createdAt", "creatorId", "id", "message", "recurring") SELECT "amount", "createdAt", "creatorId", "id", "message", "recurring" FROM "Donation";
DROP TABLE "Donation";
ALTER TABLE "new_Donation" RENAME TO "Donation";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
