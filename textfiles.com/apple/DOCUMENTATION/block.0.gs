

BLK0SAVE, by Guy T. Rice

     Bob Garth recently pointed out that one of the most likely places to hide
a virus, or at least to patch one in, is block 0, the bootup code, on your
ProDOS disks.  I don't know if such a virus has been made yet, but this
program will protect you from one if it has been or will be developed.

     Put this into your SYSTEM/SYSTEM.SETUP directory.  Now, everytime you
boot up, it will check the boot code to see if it's been modified.  If it has,
it will tell you so, fix block 0, and then reboot.  (It lets you know, so you
might possibly be able to figure out which program did it.  If you just
downloaded and tried out a new program, and then this message pops up, LET US
ALL KNOW IMMEDIATELY!!!)

     It would probably be wisest to rename this program to something unique.
That way, a virus install program can't delete or modify this file.  (For
example, you could rename BLK0SAVE to something like ZSDFSLKJHERSUR.)

     Comments?  My GEnie mail address is GUY.T.RICE
                