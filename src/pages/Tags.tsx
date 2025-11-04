import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Search, Plus } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";

const initialTags = [
  "Lead",
  "low-value-bracket",
  "new-owner",
  "service-due",
  "wintersportal",
  "testdate",
  "high-request",
  "belowner",
  "eh-armony-purchase",
  "recall-notice",
  "finance-request",
  "demo-request",
  "trade-in",
];

export default function Tags() {
  const [tags, setTags] = useState(initialTags);
  const [newTagName, setNewTagName] = useState("");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredTags = tags.filter((tag) =>
    tag.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTag = () => {
    if (newTagName.trim()) {
      setTags([...tags, newTagName.trim()]);
      setNewTagName("");
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">🏷️ Tags</h1>
          <p className="text-muted-foreground mt-1">Manage tags for organizing contacts and campaigns</p>
        </div>
        <Dialog>
          <DialogTrigger asChild>
            <Button>
              <Plus className="h-4 w-4 mr-2" />
              Add New Tag
            </Button>
          </DialogTrigger>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Create New Tag</DialogTitle>
              <DialogDescription>Add a new tag to organize your contacts and campaigns.</DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label htmlFor="tagName">Tag Name</Label>
                <Input
                  id="tagName"
                  placeholder="e.g., VIP Customer"
                  value={newTagName}
                  onChange={(e) => setNewTagName(e.target.value)}
                />
              </div>
            </div>
            <DialogFooter>
              <Button onClick={handleAddTag}>Create Tag</Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      </div>

      <div className="relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
        <Input
          placeholder="Search tags..."
          className="pl-10"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      <Card className="overflow-hidden">
        <div className="border-b p-4 bg-muted/50">
          <div className="grid grid-cols-12 gap-4 font-semibold text-sm">
            <div className="col-span-1"></div>
            <div className="col-span-4">Tag</div>
            <div className="col-span-3">Created At</div>
            <div className="col-span-2">Actions</div>
          </div>
        </div>

        <div className="divide-y">
          {filteredTags.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-muted-foreground">No tags found</p>
            </div>
          ) : (
            filteredTags.map((tag, index) => (
              <div key={index} className="p-4 hover:bg-muted/50 transition-colors">
                <div className="grid grid-cols-12 gap-4 items-center">
                  <div className="col-span-1">
                    <Checkbox />
                  </div>
                  <div className="col-span-4">
                    <span className="font-medium">{tag}</span>
                  </div>
                  <div className="col-span-3">
                    <span className="text-sm text-muted-foreground">Oct 3, 2025</span>
                  </div>
                  <div className="col-span-2">
                    <Button variant="ghost" size="sm">
                      --
                    </Button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </Card>

      {filteredTags.length > 0 && (
        <div className="flex items-center justify-between text-sm text-muted-foreground">
          <span>Showing {filteredTags.length} tags</span>
          <div className="flex gap-2">
            <Button variant="outline" size="sm" disabled>
              Previous
            </Button>
            <Button variant="outline" size="sm" disabled>
              Next
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}
